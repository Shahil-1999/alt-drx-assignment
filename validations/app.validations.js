const joi = require('joi')
const CalcValidation = joi.object({

  a: joi.number().integer().required().label('a'),
  b: joi.number().integer().required().label('b'),
});

function validateData (query){
    const { value, error } = CalcValidation.validate(query);
    
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  return {
    a: +value.a,
    b: +value.b
  };
}

module.exports = {
    validateData
}