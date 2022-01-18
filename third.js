/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
class Calculator {
  // eslint-disable-next-line no-useless-constructor
  // eslint-disable-next-line no-empty-function
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calculator = new Calculator();
module.exports = calculator;
