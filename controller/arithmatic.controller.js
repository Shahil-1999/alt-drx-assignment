const calcService = require("../services/arithmatic.service");
const validation = require("../validations/app.validations");
const histService = require("../services/history.service");
async function add(req, res) {
  const { a, b } = validation.validateData(req.query);

  const op = 'add'
  const result = calcService.addCalc(a, b);
  histService.addHistory(op, a, b, result);
  res.status(200).json({
    message: op,
    data: result,
  });
}
async function substract(req, res) {
  const { a, b } = validation.validateData(req.query);

  const op = 'subtract'
  const result = calcService.subtractCalc(a, b);
  histService.addHistory(op, a, b, result);
  res.status(200).json({
    message: op,
    data: result,
  });
}
async function multiply(req, res) {
  const { a, b } = validation.validateData(req.query);

  const op = 'multiply'
  const result = calcService.multiplyCalc(a, b);
  histService.addHistory(op, a, b, result);
  res.status(200).json({
    message: op,
    data: result,
  });
}
async function divide(req, res) {
  const { a, b } = validation.validateData(req.query);

  const op = 'divide'
  const result = calcService.divideCalc(a, b);
  histService.addHistory(op, a, b, result);
  res.status(200).json({
    message: op,
    data: result,
  });
}

module.exports = {
  add,
  substract,
  multiply,
  divide,
};
