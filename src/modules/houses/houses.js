const model = require('./model')
const postModel = require('../companies/model')
const moment = require('moment')
moment.locale('uz')

module.exports = {
    GET: async(req, res) => {
        try {
            const id = req.query.complexId
            const houses = await model.allHouses(id)
            res.send(houses)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {address,room,price,complex,comp} = req.body
            const houses = await model.postHouses(address,room,price,comp,complex)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}