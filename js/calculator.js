import { add, subtract, multiply, divide } from "./math.js";

// Calculator variable
let displayString = "";

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

export function updateDisplay(newText = "") {
    /**
     * Updates the display text of calculator screen
     */
    displayString += newText;
    display.innerText = displayString;
}

export function clearScreen() {
    displayString = "";
    updateDisplay();
}
