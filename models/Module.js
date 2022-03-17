
const mongoose = require('mongoose');


const ModuleSchema = new mongoose.Schema({
    num:Number,
    title:String,
    lessons:[
        {
            ref:'Lesson', // <-- a user bel
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    
})

module.exports = mongoose.model('Module', ModuleSchema)