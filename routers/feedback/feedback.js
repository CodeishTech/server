const express = require('express');
const router = express.Router();
const feedbackController = require('../../controller/feedback/feedback');
const authenticateToken = require('../../middleware/user/user');

router.post('/addfeedback', authenticateToken, feedbackController.AddFeedback);

router.get('/retrieve_feedback/:userid/:subject', feedbackController.RetrieveFeedbackByUseridAndSubject);

router.get('/retrieve_feedback_by_subject', feedbackController.RetrieveFeedbackBySubject);

router.get('/delete_feedback/:userId/:subject', authenticateToken, feedbackController.DeleteFeedbackByUseridAndSubject);

module.exports = router;