
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
            {
                num:1,
                part:2,
                vocab: [
                    {
                        word:'ka',
                        kana:'か',
                        image:'https://4ch.tokyo/hiragana/img/6-1-ka-hiragana.jpg'
                    },
                    {
                        word:'ki',
                        kana:'き',
                        image:'https://4ch.tokyo/hiragana/img/7-1-ki-hiragana.jpgg'
                    },
                    {
                        word:'ku',
                        kana:'く',
                        image:'https://4ch.tokyo/hiragana/img/8-1-ku-hiragana.jpg'
                    },
                    {
                        word:'ke',
                        kana:'け',
                        image:'https://4ch.tokyo/hiragana/img/9-1-ke-hiragana.jpg'
                    },
                    {
                        word:'ko',
                        kana:'こ',
                        image:'https://4ch.tokyo/hiragana/img/10-1-oo-hiragana.jpg'
                    },
                    
                ],
            }, 
            {
                num:1,
                part:3,
                vocab: [
                    {
                        word:'sa',
                        kana:'さ',
                        image:'https://4ch.tokyo/hiragana/img/11-1-sa-hiragana.jpg'
                    },
                    {
                        word:'shi',
                        kana:'し',
                        image:'https://4ch.tokyo/hiragana/img/12-1-shi-hiragana.jpg'
                    },
                    {
                        word:'su',
                        kana:'す',
                        image:'https://4ch.tokyo/hiragana/img/13-1-su-hiragana.jpg'
                    },
                    {
                        word:'se',
                        kana:'せ',
                        image:'https://4ch.tokyo/hiragana/img/14-1-se-hiragana.jpg'
                    },
                    {
                        word:'so',
                        kana:'そ',
                        image:'https://4ch.tokyo/hiragana/img/15-1-so-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:1,
                part:4,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'red',
                        kana:'あかい',
                        image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
                    },
                    {
                        word:'blue',
                        kana:'あおい',
                        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png'
                    },
                    {
                        word:'sushi',
                        kana:'すし',
                        image:'https://www.pngitem.com/pimgs/m/346-3469775_japanese-cuisine-makizushi-asian-transparent-background-sushi-clipart.png'
                    },
                    {
                        word:'face',
                        kana:'かお',
                        image:'https://www.kindpng.com/picc/m/785-7857115_boy-face-clip-art-at-clipart-library-face.png'
                    },
                    {
                        word:'station',
                        kana:'えき',
                        image:'https://i.pinimg.com/originals/ea/3f/d3/ea3fd35a9cfe377f8bce90b2563fd4a4.jpg'
                    },
                    {
                        word:'to listen',
                        kana:'きく',
                        image:'https://www.seekpng.com/png/detail/108-1084339_vector-library-stock-free-listen-cliparts-download-ear.png'
                    },
                    // {
                    //     word:'apple',
                    //     kana:'りんご',
                    //     image:'https://media.istockphoto.com/vectors/simple-apple-in-flat-style-vector-illustration-vector-id1141529240?k=20&m=1141529240&s=612x612&w=0&h=_j9z-sPT6AqFDSSXHnSYWrXOvDOgyMmSdTUrBiZULCo='
                    // },
                    // {
                    //     word:'cloud',
                    //     kana:'くも',
                    //     image:'https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
                    // },
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
                lessons:[lessons[0], lessons[1], lessons[2], lessons[3]],
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