const Chat = require('../models/Chat');
const Message = require('../models/Message');

async function createOrGetDirectChat(userId, otherUserId) {
  let chat = await Chat.findOne({ isGroup: false, participants: { $all: [userId, otherUserId] } }).populate('participants', 'name email');
  if (!chat) {
    chat = await Chat.create({ participants: [userId, otherUserId] });
  }
  return chat;
}

async function getRecentChats(userId, { limit = 20 } = {}) {
  const chats = await Chat.find({ participants: userId })
    .sort({ updatedAt: -1 })
    .limit(limit)
    .populate('lastMessage')
    .populate('participants', 'name email');
  return chats;
}

async function filterChats(userId, { q, limit = 50 } = {}) {
  const criteria = { participants: userId };
  if (q) {
    criteria.$or = [
      { name: { $regex: q, $options: 'i' } },
    ];
  }
  const chats = await Chat.find(criteria).limit(limit).populate('participants', 'name email').populate('lastMessage');
  return chats;
}

async function getChatMessages(chatId, { page = 1, pageSize = 50 } = {}) {
  const skip = (page - 1) * pageSize;
  const messages = await Message.find({ chat: chatId }).sort({ createdAt: 1 }).skip(skip).limit(pageSize).populate('sender', 'name email');
  return messages;
}

async function countUnread(userId) {
  const unread = await Message.countDocuments({ 'readBy': { $ne: userId }, 'chat': { $in: await Chat.find({ participants: userId }).distinct('_id') } });
  return unread;
}

module.exports = { createOrGetDirectChat, getRecentChats, filterChats, getChatMessages, countUnread };
