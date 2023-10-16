// import express
const express = require('express')
// import cors
const cors = require('cors')
//import dotenv 
require('dotenv').config()
// import mongoose
const mongoose = require('mongoose')
// import redis
const redis = require('redis')
// import body parser 
const bodyParser = require('body-parser')
// import users schema
const Users = require('./model-users')

// run the express function
const app = express()

// run the cors function
app.use(cors())

// run the body parser function
app.use(bodyParser.json())

// databases
mongoose.connect(
    process.env.MONGODB_URL,
      console.log('Connected to MongoDB')
  )