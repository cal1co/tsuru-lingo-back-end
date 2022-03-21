const { off } = require('../models/Lang');
const Lang = require('../models/Lang')
const Module = require('../models/Module')
const Lesson = require('../models/Lesson')
const jwt = require('jsonwebtoken')
const jwtAuthenticate = require('express-jwt')


module.exports = {

    

    async show(req, res) {
        try{
            const lang = await Lang.findOne({ code: req.params.lang })
            .populate('modules')
            console.log('GETTING LANG', lang)
                res.json( lang );
        } catch(err) {
            console.log("ERROR LOADING LANGUAGE", err)
            res.sendStatus(500)
        }
    },

    async module(req, res){
        try {
            const module = await Module.findOne({ code: req.params.lang })
            .populate('lessons')
                let content = module.lessons[req.params.module - 1] // this is hard coded <---- should change depending on whether or not a user has completed the previous lesson!!!!!
                res.json(content)
                console.log('fetching module content:', content)
                console.log('all content:', module.lessons)
        } catch (err) {
            console.log("ERROR LOADING MODULE", err)
            res.sendStatus(500)
        }
    },

    async pass(req, res){
        try {
            console.log('PASS CALLED', req.body.token)
            checkAuth(req.body.token)
        } catch (err) {
            
        }
    },

    async practice(req, res){
        function randomise(input){
            return input.sort((a,b) => 0.5 - Math.random())
        } 
        try {
            // console.log('Getting module practice!', req)
            const module = await Module.findOne({ code: req.params.lang })
            .populate('lessons')
            console.log("NUM", req.params.num)
            let modLessons = []
            module.lessons.map((e) => {modLessons.push(e.vocab)})
            let modVocab = []
            modLessons.forEach((e) => {
                modVocab.push(e)
            })
            let randVocab = randomise(modVocab.flat())
            let pracLesson = []
            for (let i = 0; i < 6; i++){
                pracLesson.push(randVocab[i])
            }
            console.log(pracLesson)

            res.json({num: parseInt(req.params.num), part:5, vocab:pracLesson})
        } catch (err) {
            
        }
    }


}