const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

module.exports = {
  port: process.env.PORT || 4000,
  mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/ws_chat',
  jwtSecret: process.env.JWT_SECRET || 'change_this',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  resetPasswordExpires: parseInt(process.env.RESET_PASSWORD_EXPIRES || '3600000', 10),
  emailFrom: process.env.EMAIL_FROM || 'no-reply@example.com',
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};
