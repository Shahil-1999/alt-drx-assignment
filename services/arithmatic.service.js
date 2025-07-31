function addCalc (a, b){
    
    return a + b
}
function subtractCalc (a, b){
    return a - b
}
function multiplyCalc (a, b){
    return a * b
}
function divideCalc (a, b){
    if(b === 0) throw new Error('Division by zero not possible');
    return a / b
}


module.exports = {
    addCalc,
    subtractCalc,
    multiplyCalc,
    divideCalc,
}