const mongoose = require('mongoose');
const Schema = mongoose.Schema
const project = new Schema({
    Title:{
        type: String,
        required: true
    },
    Description:{
        type: String
    },
    Employee:[
        {
            emp:{
                type: Schema.Types.ObjectId,
                enum: 'Employee'
            }
        }
    ],
    Status:{
        type: String,
        enum: ['In-progess','Completed','NoStatus'],
        default: 'NoStatus'
    },
    Started:{
        type: Date
    },
    Deadline:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project',project);