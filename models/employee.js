const mongoose = require('mongoose')
const employee = new mongoose.Schema('employee')({
    Name:{
        type: String,
        required: true
    },
    Employeeid:{
        type: Number,
        required: true
    },
    Email:{
        type: Email,
        required: true
    },
    Cell:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Employee',employee);