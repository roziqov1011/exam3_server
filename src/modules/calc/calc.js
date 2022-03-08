const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const calcId = req.query.calc.split(',');
            const Calcc = await model.allCalc(calcId[0], calcId[1])
            res.send(Calcc)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}