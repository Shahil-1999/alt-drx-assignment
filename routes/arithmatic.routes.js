const Routes = require('express').Router()
const controller = require('../controller/arithmatic.controller')

Routes.get('/add', controller.add)
Routes.get('/subtract', controller.substract)
Routes.get('/multiply', controller.multiply)
Routes.get('/divide', controller.divide)
module.exports = Routes