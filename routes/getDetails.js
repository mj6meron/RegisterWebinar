
// this module varifies and sends data to api get requests in a securePage

const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.get('/aUser', async (req, res) => {
    console.log('we called the get here!')
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json('Access Denied');
    }
    
    try {
    
        //  This makes sure that every api call has a token and varified
        console.log("token that made the api Get request : ---> ", token)
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log('varified   --->  ', verified)
        req.user = verified;

        const mydata = await User.find({ _id: verified._id})
        console.log({"name":mydata[0].name, 'email':mydata[0].email, 'employment':mydata[0].employment})

        res.json({"name":mydata[0].name, "email":mydata[0].email, "employment":mydata[0].employment})
    
    } catch (error) {
        console.log('We found an error from varifyToken', error)
        res.status(400).json('Invalid Token')
    }
})

module.exports = router;


/**
 * 
 * 
 */