const { verifyToken } = require('../utils/jwt');
const Message = require('../models/Message');
const Chat = require('../models/Chat');

function initSockets(io) {
  // middleware for socket auth
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth && socket.handshake.auth.token;
      if (!token) return next(new Error('Authentication error'));
      const decoded = verifyToken(token);
      socket.userId = decoded.id;
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('Socket connected', socket.userId);
    // each user joins a personal room
    socket.join(`user:${socket.userId}`);

    socket.on('send_message', async (payload) => {
      try {
        const { chatId, content, metadata } = payload;
        const message = await Message.create({ chat: chatId, sender: socket.userId, content, metadata });
        await Chat.findByIdAndUpdate(chatId, { lastMessage: message._id, updatedAt: Date.now() });
        const fullMsg = await message.populate('sender', 'name email');
        // broadcast to participants: fetch chat
        const chat = await Chat.findById(chatId).populate('participants', '_id');
        chat.participants.forEach((p) => {
          io.to(`user:${p._id}`).emit('new_message', { chatId, message: fullMsg });
        });
      } catch (err) {
        console.error('send_message error', err);
      }
    });

    socket.on('mark_read', async ({ messageId }) => {
      try {
        const msg = await Message.findById(messageId);
        if (!msg) return;
        if (!msg.readBy.includes(socket.userId)) {
          msg.readBy.push(socket.userId);
          await msg.save();
        }
        // notify sender
        io.to(`user:${msg.sender}`).emit('message_read', { messageId, by: socket.userId });
      } catch (err) {
        console.error('mark_read error', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected', socket.userId);
    });
  });
}

module.exports = initSockets;
