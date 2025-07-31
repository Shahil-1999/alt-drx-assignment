const Routes = require('express').Router()
const histController = require('../controller/history.controller')

Routes.get('/getHist',histController.getHistory )
Routes.delete('/deleteHist',histController.clearHistory )
module.exports = Routes