const model = require('./model')
const moment = require('moment')
const { post } = require('..')
moment.locale('uz')

module.exports = {
    GET: async(req, res) => {
        try {
            const homeorder = await model.allHomeorder()
            res.send(homeorder)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {ism, tel, compan, compl, hous } = req.body
            const homeorder = await model.postHomeorder(ism, tel, compan, compl, hous)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}