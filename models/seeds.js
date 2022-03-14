
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// Load our Flight model file (and any others?)
const User = require('./User');
const Lang = require('./Lang');

// Connect to DB server; note the DB selection: 'ba', like a path
mongoose.connect('mongodb://127.0.0.1/tsuru');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Connection error', err);
});


db.once('open', async () => {

console.log('Connected.');


await Lang.deleteMany();

try {
    const results = await Lang.create([
    {
        code:'jp'
    }, // end of user #1
    ]);
} catch( err ){
    console.log('Error creating lang:', err);
}

try {
    var langs = await Lang.find();
    console.log('lang:', langs);
} catch ( err ){
    console.log('Error finding lang:', err);
    process.exit(1);
}


await User.deleteMany();

try {
    const results = await User.create([
        {
            name:'Alex',
            email:'alex@ga.co',
            passwordDigest: bcrypt.hashSync('chicken', 10),
            langs:langs[0]
        }, // end of flight #1
        {
            name:'Ro',
            email:'ro@ga.co',
            passwordDigest: bcrypt.hashSync('chicken', 10),
            langs:langs[0]
        }, // end of flight #1
    ]);
} catch( err ){
    console.log('Error creating Users:', err);
}

try {
    const users = await User.find().populate('langs');
    console.log('Users:', users/*.map( (u) => u.langs)*/);
} catch ( err ){
    console.log('Error finding Users:', err);
    process.exit(1);
}
// console.log('Created flights:', results);










process.exit(0); // all good, quit program


});