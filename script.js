const buttons = document.getElementsByTagName("button");
const output = document.getElementById("display");
const result = document.getElementById("outputs");
const operator = document.getElementById("operation");
const equal = document.getElementById("equals");

let display = "";
let second = "";
let final_answer = "";
let answer_given = false;

let operation = {
  number1: 0,
  sign: '',
  number2: 0
}

function change_display (operation) {
  for (let button of buttons) {
    button.addEventListener("click", function() {
      const buttonText = button.innerText || button.textContent;
      temp_display = buttonText;
      second = second + temp_display;

      if (answer_given === true) {
        operation.sign = "";
        operation.number1 = 0;
        operation.number2 = 0;
        display = "";
        second = "";
        result.innerHTML = "";
        answer_given = false;
      }

      if (this.id === "operation") {
        operation.number1 = Number(display);
        operation.sign = temp_display;
        second = "";
      }

      else if (this.id === "clear") {
        operation.sign = "";
        operation.number1 = 0;
        operation.number2 = 0;
        display = "";
        temp_display = "";
        final_answer = "";
        result.innerHTML = "";
        second = "";
      }

      else if (this.id === "equals") {
        operation.number2 = Number(second.replace("=",""));
        final_answer = operate(operation);
        result.innerHTML = final_answer;
        answer_given = true;
      }

      display = display + temp_display;
      output.innerHTML = display;
    });
  }
}

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

change_display(operation);