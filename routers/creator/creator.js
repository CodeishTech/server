const express = require('express');
const router = express.Router();
const creatorController = require('../../controller/creator/creator');

router.post('/creatorregister', creatorController.CreatorRegister);

router.post('/creator', creatorController.CreatorLogin);

module.exports = router;