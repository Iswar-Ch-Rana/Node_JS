const express = require('express');
const { generateNewShortURL , getAnalytics , getVisitedHistory } = require('../controllers/url');

const router = express.Router();


router.post('/', generateNewShortURL);


router.get('/analytics/:shortId', getAnalytics);

router.get('/:shortID', getVisitedHistory);

module.exports = router ;
