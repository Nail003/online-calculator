import { add, subtract, multiply, divide } from "./math.js";
import { operate, updateDisplay } from "./calculator.js";
import { clearButtonHandler, numberButtonHandler } from "./eventHandlers.js";

const firstValue = 10;
const secondValue = 5;
const operator = "/";

// Assigning click events to all calculator buttons
const numberButtons = document.querySelectorAll(".numberButton");
const clearButton = document.querySelector(".clearButton");

numberButtons.forEach((button) => {
    button.addEventListener("click", numberButtonHandler);
});
clearButton.addEventListener("click", clearButtonHandler);
