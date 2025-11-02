const buttons = document.getElementsByTagName("button");
const output = document.getElementById("display");
const operator = document.getElementById("operation");
const equal = document.getElementById("equals");

let display = "";

let operation = {
  number1: 0,
  sign: '',
  number2: 1
}

function change_display (operation) {
  for (let button of buttons) {
    button.addEventListener("click", function() {
      const buttonText = button.innerText || button.textContent;
      temp_display = buttonText;

      if (this.id === "operation") {
        operation.sign = temp_display;
        operation.number1 = Number(display);
        display = "";
        temp_display = "";
      }

      else if (this.id === "clear") {
        operation.sign = "";
        operation.number1 = 0;
        operation.number2 = 0;
        display = "";
        temp_display = "";
      }

      else if (this.id === "equals") {
        operation.number2 = Number(display);
        temp_display = "";
        display = operate(operation);
      }

      display = display + temp_display;
      output.innerHTML = display;
    });
  }
}

change_display(operation);

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
  else if (equation.sign === 'x') {
    return multiply(equation.number1, equation.number2);
  }
  else if (equation.sign === '/') {
    return divide (equation.number1, equation.number2);
  }
}