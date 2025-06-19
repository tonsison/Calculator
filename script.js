const buttons = document.getElementsByTagName("button");
const buttontxt = buttons.innerText || buttons.TextContent;
const output = document.getElementById("display");

let display = "0";

let operation = {
  number1: 0,
  sign: '',
  number2: 0
}

function change_display () {
  buttons.addEventListener("mouseclick", () => {
    output.innerHTML = display;
  })
}

change_display();

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