import { add, subtract, multiply, divide } from "./math.js";
import { operate, updateDisplay } from "./calculator.js";
import {
    assignButtonHandler,
    changeSignButtonHandler,
    clearButtonHandler,
    numberButtonHandler,
    operatorButtonHandler,
} from "./eventHandlers.js";

// Assigning click events to all calculator buttons
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const clearButton = document.querySelector(".clearButton");
const assignButton = document.querySelector(".assignButton");
const changeSignButton = document.querySelector(".changeSignButton");
const decimalButton = document.querySelector(".decimalButton");

numberButtons.forEach((button) => {
    button.addEventListener("click", numberButtonHandler);
});
operatorButtons.forEach((button) =>
    button.addEventListener("click", operatorButtonHandler)
);
clearButton.addEventListener("click", clearButtonHandler);
assignButton.addEventListener("click", assignButtonHandler);
changeSignButton.addEventListener("click", changeSignButtonHandler);
