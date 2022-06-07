const mongoose = require('mongoose');
const Schema = mongoose.Schema
const project = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    employee:[
        {
            type: String
        }
    ],
    status:{
        type: String,
        enum: ['In-progess','Completed','NoStatus'],
        default: 'NoStatus'
    },
    started:{
        type: Date,
        default: Date.now
    },
    deadline:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project',project);