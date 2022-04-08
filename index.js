const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pages = require('./routes/pages')
const authRoute = require('./routes/auth')
const secureRoute = require('./routes/secure')
const getDetails = require('./routes/getDetails')
const signale = require('signale')
const PORT = process.env.PORT || 3000
const app = express()

// Activate Dontenv - helps us read from the .env file
dotenv.config()

// Connect to database
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology:true, useNewUrlParser: true}, ()=>{
    signale.success('connected to the whole world wit my database')
})

// Middlewares - extends the functionality of our application
app.use(express.json())
app.use(express.static('public'))

//Routes
app.use('/api/user', authRoute)
app.use('/api/secure', secureRoute)
app.use('/', pages)
app.use('/getDetails', getDetails)

// run the server
app.listen(PORT, ()=>{
    signale.info('App is running on PORT ', PORT)
})