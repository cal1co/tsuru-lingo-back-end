
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
                        image:'https://4ch.tokyo/hiragana/img/1-2-a-hiragana.jpg'
                    },
                    {
                        word:'i',
                        kana:'い',
                        image:'https://4ch.tokyo/hiragana/img/2-2-i-hiragana.jpg'
                    },
                    {
                        word:'u',
                        kana:'う',
                        image:'https://4ch.tokyo/hiragana/img/3-2-u-hiragana.jpg'
                    },
                    {
                        word:'e',
                        kana:'え',
                        image:'https://4ch.tokyo/hiragana/img/4-2-e-hiragana.jpg'
                    },
                    {
                        word:'o',
                        kana:'お',
                        image:'https://4ch.tokyo/hiragana/img/5-2-o-hiragana.jpg'
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
                        image:'https://4ch.tokyo/hiragana/img/6-2-ka-hiragana.jpg'
                    },
                    {
                        word:'ki',
                        kana:'き',
                        image:'https://4ch.tokyo/hiragana/img/7-2-ki-hiragana.jpg'
                    },
                    {
                        word:'ku',
                        kana:'く',
                        image:'https://4ch.tokyo/hiragana/img/8-2-ku-hiragana.jpg'
                    },
                    {
                        word:'ke',
                        kana:'け',
                        image:'https://4ch.tokyo/hiragana/img/9-2-ke-hiragana.jpg'
                    },
                    {
                        word:'ko',
                        kana:'こ',
                        image:'https://4ch.tokyo/hiragana/img/10-2-ko-hiragana.jpg'
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
                        image:'https://4ch.tokyo/hiragana/img/11-2-sa-hiragana.jpg'
                    },
                    {
                        word:'shi',
                        kana:'し',
                        image:'https://4ch.tokyo/hiragana/img/12-2-si-hiragana.jpg'
                    },
                    {
                        word:'su',
                        kana:'す',
                        image:'https://4ch.tokyo/hiragana/img/13-2-su-hiragana.jpg'
                    },
                    {
                        word:'se',
                        kana:'せ',
                        image:'https://4ch.tokyo/hiragana/img/14-2-se-hiragana.jpg'
                    },
                    {
                        word:'so',
                        kana:'そ',
                        image:'https://4ch.tokyo/hiragana/img/15-2-so-hiragana.jpg'
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
                ],
            }, 
            {
                num:2,
                part:1,
                vocab: [
                    
                    { 
                        word:'ta',
                        kana:'た',
                        image:'https://4ch.tokyo/hiragana/img/16-2-ta-hiragana.jpg'
                    },
                    {   
                        word:'chi',
                        kana:'ち',
                        image:'https://4ch.tokyo/hiragana/img/17-2-ti-hiragana.jpg'
                    },
                    {
                        word:'tsu',
                        kana:'つ',
                        image:'https://4ch.tokyo/hiragana/img/18-2-tu-hiragana.jpg'
                    },
                    {
                        word:'te',
                        kana:'て',
                        image:'https://4ch.tokyo/hiragana/img/19-2-te-hiragana.jpg'
                    },
                    {
                        word:'to',
                        kana:'と',
                        image:'https://4ch.tokyo/hiragana/img/20-2-to-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:2,
                part:2,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
                    },
                ],
            }, 
            {
                num:2,
                part:3,
                vocab: [
                    
                    { 
                        word:'na',
                        kana:'な',
                        image:'https://4ch.tokyo/hiragana/img/21-2-na-hiragana.jpg'
                    },
                    {   
                        word:'ni',
                        kana:'に',
                        image:'https://4ch.tokyo/hiragana/img/22-2-ni-hiragana.jpg'
                    },
                    {
                        word:'nu',
                        kana:'ぬ',
                        image:'https://4ch.tokyo/hiragana/img/23-2-nu-hiragana.jpg'
                    },
                    {
                        word:'ne',
                        kana:'ね',
                        image:'https://4ch.tokyo/hiragana/img/24-2-ne-hiragana.jpg'
                    },
                    {
                        word:'no',
                        kana:'の',
                        image:'https://4ch.tokyo/hiragana/img/25-2-no-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:2,
                part:4,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
                    },
                ],
            }, 
            {
                num:3,
                part:1,
                vocab: [
                    { 
                        word:'ha',
                        kana:'は',
                        image:'https://4ch.tokyo/hiragana/img/26-2-ha-hiragana.jpg'
                    },
                    {   
                        word:'hi',
                        kana:'ひ',
                        image:'https://4ch.tokyo/hiragana/img/27-2-hi-hiragana.jpg'
                    },
                    {
                        word:'fu/hu',
                        kana:'ふ',
                        image:'https://4ch.tokyo/hiragana/img/28-2-hu-hiragana.jpg'
                    },
                    {
                        word:'he',
                        kana:'へ',
                        image:'https://4ch.tokyo/hiragana/img/29-2-he-hiragana.jpg'
                    },
                    {
                        word:'ho',
                        kana:'ほ',
                        image:'https://4ch.tokyo/hiragana/img/30-2-ho-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:3,
                part:2,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
                    },
                ],
            }, 
            {
                num:3,
                part:3,
                vocab: [
                    { 
                        word:'ma',
                        kana:'ま',
                        image:'https://4ch.tokyo/hiragana/img/31-2-ha-hiragana.jpg'
                    },
                    {   
                        word:'mi',
                        kana:'み',
                        image:'https://4ch.tokyo/hiragana/img/32-2-hi-hiragana.jpg'
                    },
                    {
                        word:'fu/mu',
                        kana:'む',
                        image:'https://4ch.tokyo/hiragana/img/33-2-mu-hiragana.jpg'
                    },
                    {
                        word:'me',
                        kana:'め',
                        image:'https://4ch.tokyo/hiragana/img/34-2-me-hiragana.jpg'
                    },
                    {
                        word:'mo',
                        kana:'も',
                        image:'https://4ch.tokyo/hiragana/img/35-2-mo-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:3,
                part:4,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
                    },
                ],
            }, 
            {
                num:4,
                part:1,
                vocab: [
                    { 
                        word:'ra',
                        kana:'ら',
                        image:'https://4ch.tokyo/hiragana/img/36-2-ra-hiragana.jpg'
                    },
                    {   
                        word:'ri',
                        kana:'り',
                        image:'https://4ch.tokyo/hiragana/img/37-2-ri-hiragana.jpg'
                    },
                    {
                        word:'ru',
                        kana:'る',
                        image:'https://4ch.tokyo/hiragana/img/38-2-ru-hiragana.jpg'
                    },
                    {
                        word:'re',
                        kana:'れ',
                        image:'https://4ch.tokyo/hiragana/img/39-2-re-hiragana.jpg'
                    },
                    {
                        word:'ro',
                        kana:'ろ',
                        image:'https://4ch.tokyo/hiragana/img/40-2-ho-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:4,
                part:2,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
                    },
                ],
            }, 
            {
                num:4,
                part:3,
                vocab: [
                    { 
                        word:'ya',
                        kana:'や',
                        image:'https://4ch.tokyo/hiragana/img/41-2-ya-hiragana.jpg'
                    },
                    {   
                        word:'yu',
                        kana:'ゆ',
                        image:'https://4ch.tokyo/hiragana/img/42-2-yu-hiragana.jpg'
                    },
                    {
                        word:'yo',
                        kana:'よ',
                        image:'https://4ch.tokyo/hiragana/img/43-2-yo-hiragana.jpg'
                    },
                    {
                        word:'wa',
                        kana:'わ',
                        image:'https://4ch.tokyo/hiragana/img/44-2-wa-hiragana.jpg'
                    },
                    {
                        word:'n',
                        kana:'n',
                        image:'https://4ch.tokyo/hiragana/img/45-2-n-hiragana.jpg'
                    },
                ],
            }, 
            {
                num:4,
                part:4,
                vocab: [
                    
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'',
                        kana:'', ///////////////////////////////////////////////////
                        image:''
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
                title:'Hiragana: Intro',
                lessons:[lessons[0], lessons[1], lessons[2], lessons[3]],
            }, 
            {
                num:2,
                title:'Hiragana: 2',
                lessons:[lessons[4], lessons[5], lessons[6], lessons[7]],
            }, 
            {
                num:3,
                title:'Hiragana: 3',
                lessons:[lessons[8], lessons[9], lessons[10], lessons[11]],
            }, 
            {
                num:4,
                title:'Hiragana: Conclusion',
                lessons:[lessons[12], lessons[13], lessons[14], lessons[15]],
            }, 
            // {
            //     num:5,
            //     title:'Vocab 1: Reading Hiragana',
            //     lessons:[lessons[13], lessons[14], lessons[15], lessons[16]],
            // }, 
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
                xp:0,
                passwordDigest: bcrypt.hashSync('chicken', 10),
                langs:langs[0]
            }, 
            {
                name:'Ro',
                email:'ro@ga.co',
                xp:0,
                passwordDigest: bcrypt.hashSync('chicken', 10),
                langs:langs[0]
            }, 
            {
                name:'luke',
                email:'luke@ga.co',
                xp:0,
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