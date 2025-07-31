const histService = require('../services/history.service')
function getHistory (req, res){
    const getHistData = histService.getHistory()
    res.json({
        msg: "History fetched",
        data: getHistData
    })
}

function clearHistory (req, res){
    const getHistData = histService.clearHistory()
    res.json({
        msg: "History cleared",
        data: getHistData
    })
}

module.exports = {
    getHistory,
    clearHistory
}