
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    passwordDigest:String,
    createdAt:{
        type:Date,
        default: Date.now, // automatically default this field to the current date
    },
    langs:[
        {
            // input information 
            // can create the equivalent of an ActiveRecord belongs_to association
            // ... in Mongoose this is called a 'reference'
            ref:'Lang', // <-- a user bel
            type: mongoose.Schema.Types.ObjectID,
        }
    ],

})

module.exports = mongoose.model('User', UserSchema)