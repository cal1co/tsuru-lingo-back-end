
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// Load our Flight model file (and any others?)
const User = require('./User');
const Lang = require('./Lang');
const Module = require('./Module');
const Lesson = require('./Lesson');

// Connect to DB server; note the DB selection: 'ba', like a path
uri = process.env.MONGO_URI || 'mongodb://127.0.0.1/tsuru'
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Connection error', err);
});


db.once('open', async () => {
    console.log('Connected.');



    // ///////////////// LESSON ///////////////////////////////////////

    await Lesson.deleteMany();

    try {
        const results = await Lesson.create([
            {
                num:1,
                part:1,
                vocab: [
                    {
                        word:'a',
                        kana:'あ',
                        image:'https://4ch.tokyo/hiragana/img/1-1-a-hiragana.jpg'
                    },
                    {
                        word:'i',
                        kana:'い',
                        image:'https://4ch.tokyo/hiragana/img/2-1-i-hiragana.jpg'
                    },
                    {
                        word:'u',
                        kana:'う',
                        image:'https://4ch.tokyo/hiragana/img/3-1-u-hiragana.jpg'
                    },
                    {
                        word:'e',
                        kana:'え',
                        image:'https://4ch.tokyo/hiragana/img/4-1-e-hiragana.jpg'
                    },
                    {
                        word:'o',
                        kana:'お',
                        image:'https://4ch.tokyo/hiragana/img/5-1-o-hiragana.jpg'
                    },
                ],
            }, 
        ]);
    } catch( err ){
        console.log('Error creating Modules:', err);
    }

    try {
        var lessons = await Lesson.find();
        console.log('Lessons:', lessons/*.map( (u) => u.langs)*/);
        console.log('Vocab:', lessons.map( (u) => u.vocab));
    } catch ( err ){
        console.log('Error finding lessons:', err);
        process.exit(1);
    }


    // ///////////////// LESSON ///////////////////////////////////////




    // ///////////////// MODULE ///////////////////////////////////////
    
    
    await Module.deleteMany();

    try {
        const results = await Module.create([
            {
                num:1,
                title:'intro to hiragana',
                lessons:lessons[0],
            }, 
        ]);
    } catch( err ){
        console.log('Error creating Modules:', err);
    }

    try {
        var modules = await Module.find();
        console.log('Modules:', modules/*.map( (u) => u.langs)*/);
    } catch ( err ){
        console.log('Error finding modules:', err);
        process.exit(1);
    }
    
    
    // ///////////////// MODULE ///////////////////////////////////////






    // ///////////////// LANG ///////////////////////////////////////

    await Lang.deleteMany();

    try {
        const results = await Lang.create([
        {
            code:'JP',
            modules:modules[0]
        }, // end of user #1
        ]);
    } catch( err ){
        console.log('Error creating lang:', err);
    }

    try {
        var langs = await Lang.find();
        console.log('lang:', langs);
        console.log('lang modules*****:', langs);
    } catch ( err ){
        console.log('Error finding lang:', err);
        process.exit(1);
    }
    // ///////////////// LANG ///////////////////////////////////////


    

    // ///////////////// USER ///////////////////////////////////////


    await User.deleteMany();

    try {
        const results = await User.create([
            {
                name:'Alex',
                email:'alex@ga.co',
                passwordDigest: bcrypt.hashSync('chicken', 10),
                langs:langs[0]
            }, 
            {
                name:'Ro',
                email:'ro@ga.co',
                passwordDigest: bcrypt.hashSync('chicken', 10),
                langs:langs[0]
            }, 
            {
                name:'luke',
                email:'luke@ga.co',
                passwordDigest: bcrypt.hashSync('chicken', 10),
                langs:langs[0]
            }, 
        ]);
    } catch( err ){
        console.log('Error creating Users:', err);
    }

    try {
        const users = await User.find().populate('langs.code');
        console.log('Users:', users/*.map( (u) => u.langs)*/);
    } catch ( err ){
        console.log('Error finding Users:', err);
        process.exit(1);
    }

    // ///////////////// USER ///////////////////////////////////////


    process.exit(0); // all good, quit program


});