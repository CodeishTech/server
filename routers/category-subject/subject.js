const express = require('express');
const router = express.Router();
const subjectController = require('../../controller/category-subject/subject');
const authenticateToken = require('../../middleware/user/user');

router.post('/addsubject', authenticateToken, subjectController.AddSubject);

router.get('/retrieve_all_subjects', subjectController.RetrieveAllSubjects);

router.get('/retrieve_subject/:category', subjectController.RetrieveSubjectByCategory);

router.get('/delete_subject/:id', authenticateToken, subjectController.DeleteSubjectById);

router.put('/update_subject/:id', authenticateToken, subjectController.UpdateSubjectById);

module.exports = router;