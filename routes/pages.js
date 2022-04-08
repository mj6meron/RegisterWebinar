
   
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/securePage', (req, res) => {
    res.sendFile(path.resolve('public/securePage.html'));
});


module.exports = router;