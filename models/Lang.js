
const mongoose = require('mongoose');


const LangSchema = new mongoose.Schema({
    code:''
})

module.exports = mongoose.model('Lang', LangSchema)