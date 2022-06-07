const mongoose = require('mongoose')
const employee = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
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
        type: Bool,
        default: false
    }
})

module.exports = mongoose.model('Employee',employee);