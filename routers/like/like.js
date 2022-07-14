const express = require('express');
const router = express.Router();
const likeController = require('../../controller/like/like');
const authenticateToken = require('../../middleware/user/user');

router.post('/addlike', authenticateToken, likeController.AddLike);

router.get('/retrive_likes', authenticateToken, likeController.RetrieveLikes);

router.get('/retrive_like/:userid', authenticateToken, likeController.RetrieveLikeByUserid);

router.get('/delete_like/:userId/:subject', authenticateToken, likeController.DeleteLikeByUseridAndSubject);

module.exports = router;