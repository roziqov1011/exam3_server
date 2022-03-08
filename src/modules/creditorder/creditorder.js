const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const {type} = req.query
            const creditordertype = await model.typeCreditorder(type)
            const creditorder = await model.allCreditorder()
            const creditorderSum = await model.allCreditorderSum()
            res.send({creditorder,creditorderSum,creditordertype})
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {ism, tel, bank, bankTy, kredidt } = req.body
            const homeorder = await model.postCreditorder(ism, tel, bank, bankTy, kredidt)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}