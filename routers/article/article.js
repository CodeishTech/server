const express = require('express');
const router = express.Router();
const articleController = require('../../controller/article/article');
const authenticateToken = require('../../middleware/user/user');

router.post('/articlepublish', authenticateToken, articleController.ArticlePublish);

router.get('/retrieve_all_articles', articleController.RetrieveAllArticles);

router.get('/retrieve_article/:id', articleController.RetrieveArticleById);

router.get('/retrieve_article_by_userId/:userId', articleController.RetrieveArticleByUserid);

router.get('/retrieve_article_by_subject/:subject', articleController.RetrieveArticleBySubject);

router.get('/delete_article/:id', authenticateToken, articleController.DeleteArticleById);

router.put('/update_article/:id', authenticateToken, articleController.UpdateArticleById);

router.put('/update_article_status/:id', authenticateToken, articleController.UpdateArticleStatusById);

module.exports = router;