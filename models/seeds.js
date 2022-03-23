
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
                        word:'crane',
                        kana:'つる', ///////////////////////////////////////////////////
                        image:'data:image/png;base64,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'
                    },
                    {
                        word:'outside',
                        kana:'そと', ///////////////////////////////////////////////////
                        image:'https://listimg.pinclipart.com/picdir/s/98-987205_picture-preposition-of-place-outside-clipart.png'
                    },
                    {
                        word:'small',
                        kana:'ちいさい', ///////////////////////////////////////////////////
                        image:'data:image/jpeg;base64,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'
                    },
                    {
                        word:'tall',
                        kana:'たかい', ///////////////////////////////////////////////////
                        image:'https://toppng.com/uploads/preview/mr-tall-11548630123302j4srmpg.png'
                    },
                    {
                        word:'subway',
                        kana:'ちかてつ', ///////////////////////////////////////////////////
                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5H24OpyXm8X2BXro6fSn32aQk5vVqWvdZ6YbwUbe2Sbk2RIutypFQ9fcW2TedoZMMg4&usqp=CAU'
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
                        word:'cat',
                        kana:'ねこ', ///////////////////////////////////////////////////
                        image:'https://www.svgheart.com/wp-content/uploads/2020/06/cute-cat-clipart-free-svg-file.png'
                    },
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'dog',
                        kana:'いぬ', ///////////////////////////////////////////////////
                        image:'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6007/dog-clipart-md.png'
                    },
                    { // words using what we've learnt !! ! !! ! !! ! !! ! !!
                        word:'country',
                        kana:'くに', ///////////////////////////////////////////////////
                        image:'https://www.nicepng.com/png/detail/39-396208_globe-clipart-country-globe-flags-of-the-world.png'
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
            modules:[modules[0], modules[1], modules[2], modules[3]]
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