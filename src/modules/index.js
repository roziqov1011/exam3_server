const express = require('express')
const router = express.Router()

const Banks = require('./banks/banks')
const Complex = require('./complex/complex')
const Companies = require('./companies/companies')
const Creditorder = require('./creditorder/creditorder')
const Homeorder = require('./homeorder/homeorder')
const Houses = require('./houses/houses')
const Calc = require('./calc/calc')

router
    .get('/banks', Banks.GET)
    .post('/banks', Banks.POST)
    .put('/banks', Banks.PUT)
    .delete('/banks', Banks.DELETE)
    .get('/calc', Calc.GET)
    .get('/complex', Complex.GET)
    .post('/complex', Complex.POST)
    .get('/companies', Companies.GET)
    .post('/companies', Companies.POST)
    .get('/creditorder',Creditorder.GET)
    .post('/creditorder',Creditorder.POST)
    .get('/houses', Houses.GET)
    .post('/houses', Houses.POST)
    .get('/homeorder', Homeorder.GET)
    .post('/homeorder', Homeorder.POST)

module.exports = router