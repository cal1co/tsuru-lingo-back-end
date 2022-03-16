
const mongoose = require('mongoose');


const ModuleSchema = new mongoose.Schema({
    num:Number,
    title:String,
    vocab:[
        {
            word:String,
            kana:String,
            image:String,
        }
    ],
    // language:{
    //     ref:'Lang', // <-- a user bel
    //     type: mongoose.Schema.Types.ObjectId,
    // }
})

module.exports = mongoose.model('Module', ModuleSchema)