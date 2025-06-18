let operation = {
  number1: 0,
  sign: '',
  number2: 0
}

let display = 0;

function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide (first, second){
 return first / second;
}

function operate (equation){
  if (equation.sign === '+') {
    return add(equation.number1, equation.number2);
  }
  else if (equation.sign === '-') {
    return subtract(equation.number1, equation.number2);
  }
  else if (equation.sign === '*') {
    return multiply(equation.number1, equation.number2);
  }
  else if (equation.sign === '/') {
    return divide (equation.number1, equation.number2);
  }
}