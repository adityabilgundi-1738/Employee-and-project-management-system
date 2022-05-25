const mongoose = require('mongoose')
const admin = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    
})

module.exports('Admin',admin);
