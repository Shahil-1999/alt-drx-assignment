let hist = []
function addHistory (operation, a, b, result){
    
    hist.push({
        operation,
        a,
        b,
        result,
        timeStamp : new Date()
    })
    return  hist
}
function getHistory (){
    
    return hist
}

function clearHistory (){
    return hist = []
}
module.exports = {
    addHistory,
    getHistory,
    clearHistory
}