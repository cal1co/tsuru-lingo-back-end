const { off } = require('../models/Lang');
const Lang = require('../models/Lang')
const Module = require('../models/Module')

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
            const module = await Lang.findOne({ code: req.params.lang })
            .populate('modules')
                let content = module.modules[req.params.module - 1]
                res.json(content)
                console.log('module content:', content)
        } catch (err) {
            console.log("ERROR LOADING MODULE", err)
            res.senStatus(500)
        }
    }

}