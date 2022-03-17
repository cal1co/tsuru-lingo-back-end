const { off } = require('../models/Lang');
const Lang = require('../models/Lang')
const Module = require('../models/Module')
const Lesson = require('../models/Lesson')

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
        } catch (err) {
            console.log("ERROR LOADING MODULE", err)
            res.sendStatus(500)
        }
    }

}