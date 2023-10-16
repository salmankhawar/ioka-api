const mongoose = require('mongoose')


let Users = mongoose.model('users', {
    title: {
        type: String,
        required: true,
      },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
  })

module.exports = Users