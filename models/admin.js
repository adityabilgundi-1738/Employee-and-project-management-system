const mongoose = require('mongoose')
const Employee = require('./employee') 

const admin = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Employee:[{
        type: Schema.Types.objectID
    }]
})

module.exports('Admin',admin);
