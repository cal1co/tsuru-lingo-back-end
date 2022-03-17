
const mongoose = require('mongoose');


const LessonSchema = new mongoose.Schema({
    num:Number,
    part:Number,
    vocab:[
        {
            word:String,
            kana:String,
            image:String,
        }
    ],
})

module.exports = mongoose.model('Lesson', LessonSchema)