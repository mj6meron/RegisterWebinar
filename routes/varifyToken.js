
const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    /* This function varifies each api call using the token in the header that we added in the auth.js login/ */
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json('Access Denied');
    }

    try {

        //  This makes sure that every api call has a token and varified
        console.log(token);
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log('varified   --->  ', verified);
        req.user = verified;
        next(); // makes sure that the node (chromium process isnt interupted)
    } catch (error) {
        console.log('We found an error from varifyToken', error);
        res.status(400).json('Invalid Token');
    }
}