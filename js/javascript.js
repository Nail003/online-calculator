import { add, subtract, multiply, divide } from "./math.js";
import { operate, updateDisplay } from "./calculator.js";
import { numberButtonHandler } from "./eventHandlers.js";

const firstValue = 10;
const secondValue = 5;
const operator = "/";

const calculatorButtons = document.querySelectorAll(".numberButton");
calculatorButtons.forEach((button) => {
    button.addEventListener("click", numberButtonHandler);
});
