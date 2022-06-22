const mongoose = require('mongoose')
const employee = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    level:{
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    date:{
        type: Date,
        default: Date.now
    },
    admin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Employee',employee);