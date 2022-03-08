const model = require('./model')
const postModel = require('../companies/model')
const moment = require('moment')
moment.locale('uz')

module.exports = {
    GET: async(req, res) => {
        try {
            const id = req.query.companieId
            const complex = await model.allComplex(id)
            res.send(complex)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {comp, complex} = req.body
            const allComplex = await model.postComplex(complex, comp)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}