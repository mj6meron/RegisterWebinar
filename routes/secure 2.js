const router = require('express').Router();
const verify = require('./varifyToken');

router.get('/', verify, (req, res) => {
    res.redirect('/batcave');
});

module.exports = router;