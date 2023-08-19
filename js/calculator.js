import { add, subtract, multiply, divide } from "./math.js";

// Calculator variable
let displayString = "";
let firstValue = "";
let secondValue = "";
let operator = "";

// Storing DOM objects for better access speed
const display = document.querySelector(".display");

export function operate(firstValue, secondValue, operator) {
    /**
     * Returns the result of specified operator on the given numbers
     * firstValue and secondValue are any numbers
     * operator = "+" or "-" or "x" or "/"
     * i.e operate(2, 4, "+") returns 6
     * i.e operate(4, 2, "/") returns 2
     */
    if (operator === "+") return add(firstValue, secondValue);
    if (operator === "-") return subtract(firstValue, secondValue);
    if (operator === "x") return multiply(firstValue, secondValue);
    if (operator === "/") return divide(firstValue, secondValue);
    return "Please enter a valid operator";
}

export function updateDisplay() {
    /**
     * Updates the display text of calculator screen
     */
    displayString = `${firstValue} ${operator} ${secondValue}`;
    display.innerText = displayString;
}

export function updateNumber(value) {
    if (operator === "") updateFirstValue(value);
    else updateSecondValue(value);
    updateDisplay();
}

export function updateOperator(newOperator) {
    operator = newOperator;
    updateDisplay();
}

export function clearDisplay() {
    /**
     * Clears the Calculator display
     */
    firstValue = "";
    secondValue = "";
    operator = "";
    updateDisplay();
    display.innerText = "(*_*)";
}

function updateFirstValue(value) {
    /**
     * Function to update variable firstValue
     */
    if (firstValue === "") firstValue = +value;
    else {
        firstValue *= 10;
        firstValue += +value;
    }
}

function updateSecondValue(value) {
    /**
     * Function to update variable secondValue
     */
    if (secondValue === "") secondValue = +value;
    else {
        secondValue *= 10;
        secondValue += +value;
    }
}
