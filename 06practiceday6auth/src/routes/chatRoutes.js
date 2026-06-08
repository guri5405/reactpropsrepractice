const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

router.post('/direct', protect, chatController.createDirectChat);
router.get('/recent', protect, chatController.recentChats);
router.get('/filter', protect, chatController.filterChats);
router.get('/:chatId/messages', protect, chatController.getMessages);
router.get('/unread/count', protect, chatController.unreadCount);

module.exports = router;
