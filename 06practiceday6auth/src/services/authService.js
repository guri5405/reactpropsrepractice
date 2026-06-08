const crypto = require('crypto');
const User = require('../models/User');
const { signToken } = require('../utils/jwt');
const { sendEmail } = require('../utils/email');
const { resetPasswordExpires } = require('../config');

async function register({ name, email, password }) {
  const user = await User.create({ name, email, password });
  const token = signToken({ id: user._id });
  return { user, token };
}

async function login({ email, password }) {
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new Error('Invalid credentials');
  const matched = await user.matchPassword(password);
  if (!matched) throw new Error('Invalid credentials');
  const token = signToken({ id: user._id });
  user.password = undefined;
  return { user, token };
}

async function forgotPassword({ email, origin }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('No account with that email');

  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  user.resetPasswordExpires = Date.now() + resetPasswordExpires;
  await user.save();

  const resetUrl = `${origin}/reset-password/${resetToken}`;
  await sendEmail({ to: user.email, subject: 'Password reset', text: `Reset: ${resetUrl}` });
  return { message: 'Password reset email sent' };
}

async function resetPassword({ token, password }) {
  const hashed = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({ resetPasswordToken: hashed, resetPasswordExpires: { $gt: Date.now() } }).select('+password');
  if (!user) throw new Error('Invalid or expired token');
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  const jwt = signToken({ id: user._id });
  user.password = undefined;
  return { user, token: jwt };
}

async function getProfile(userId) {
  const user = await User.findById(userId).select('-password -resetPasswordToken -resetPasswordExpires');
  if (!user) throw new Error('User not found');
  return user;
}

module.exports = { register, login, forgotPassword, resetPassword, getProfile };
