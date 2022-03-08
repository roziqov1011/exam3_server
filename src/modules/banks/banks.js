const model = require('./model')

module.exports = {
    GET: async(_, res) => {
        try {
            const Banks = await model.allBanks()
            res.send(Banks)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    POST: async(req, res) => {
        try {
            const {bank, btype,bfoiz} = req.body;
            if(!bank && !btype){
                res.status(201).json({createt:'createt'})
            }
            const Banks = await model.postBanks(bank, btype,bfoiz)
            res.json(req.body)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    PUT: async(req, res) => {
        try {
            const {bId,bank, btype,bfoiz} = req.body;
            if(!bId && !bank && !btype){
                res.status(200)
            }
            const Banks = await model.putBanks(bId, bank, btype,bfoiz)
            res.status(200)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    DELETE: async(req, res) => {
        try {
            const {bId} = req.body;
            if(!bId){
                res.status(202)
            }
            const Banks = await model.deleteBanks(bId)
            res.status(202)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}