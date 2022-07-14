const express = require('express');
const router = express.Router();
const bookmarkController = require('../../controller/bookmark/bookmark');
const authenticateToken = require('../../middleware/user/user');

router.post('/addbookmark', authenticateToken, bookmarkController.AddBookmark);

router.get('/retrieve_bookmark/:userid', authenticateToken, bookmarkController.RetrieveBookmarkByUserid);

router.get('/delete_bookmark/:userId/:subject', authenticateToken, bookmarkController.DeleteBookmarkByUseridAndSubject);

module.exports = router;