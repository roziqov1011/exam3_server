const model = require('./model')

module.exports = {
    GET: async(_, res) => {
        try {
            const Companies = await model.allCompanies()
            res.send(Companies)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {comp} = req.body;
            const Companies = await model.insertCompanies(comp)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}