const mongoose = require('mongoose')
const employee = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Employeeid:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Cell:{
        type: Number,
        required: true
    },
    Projects:{
        type: String,
        required: true 
    },
    Level:{
        type: String,
        enum: ['Beginner', 'Intermideate', 'Advanced']
    }
})

module.exports = mongoose.model('Employee',employee);