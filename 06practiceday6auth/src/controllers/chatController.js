const chatService = require('../services/chatService');

async function createDirectChat(req, res, next) {
  try {
    const { otherUserId } = req.body;
    const chat = await chatService.createOrGetDirectChat(req.user.id, otherUserId);
    res.status(201).json(chat);
  } catch (err) {
    next(err);
  }
}

async function recentChats(req, res, next) {
  try {
    const chats = await chatService.getRecentChats(req.user.id);
    res.json(chats);
  } catch (err) {
    next(err);
  }
}

async function filterChats(req, res, next) {
  try {
    const { q } = req.query;
    const chats = await chatService.filterChats(req.user.id, { q });
    res.json(chats);
  } catch (err) {
    next(err);
  }
}

async function getMessages(req, res, next) {
  try {
    const { chatId } = req.params;
    const { page, pageSize } = req.query;
    const messages = await chatService.getChatMessages(chatId, { page: parseInt(page) || 1, pageSize: parseInt(pageSize) || 50 });
    res.json(messages);
  } catch (err) {
    next(err);
  }
}

async function unreadCount(req, res, next) {
  try {
    const count = await chatService.countUnread(req.user.id);
    res.json({ unread: count });
  } catch (err) {
    next(err);
  }
}

module.exports = { createDirectChat, recentChats, filterChats, getMessages, unreadCount };
