
const mongoose = require('mongoose');


const LangSchema = new mongoose.Schema({
    code:String,
    modules:[{
        ref:'Module', // <-- a user bel
        type: mongoose.Schema.Types.ObjectId,
    }]
})

module.exports = mongoose.model('Lang', LangSchema)