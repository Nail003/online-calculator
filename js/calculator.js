import { add, subtract, multiply, divide } from "./math.js";

// Calculator variable
let displayString = "";
let firstValue = "";
let secondValue = "";
let operator = "";

// Storing DOM objects for better access speed
const display = document.querySelector(".display");

export function operate() {
    /**
     * Display the result of specified operator on the given numbers
     * firstValue and secondValue are any numbers
     * operator = "+" or "-" or "x" or "/"
     * i.e operate(2, 4, "+") returns 6
     * i.e operate(4, 2, "/") returns 2
     */
    let result = 0;

    // Find result
    if (operator === "+") result = add(firstValue, secondValue);
    if (operator === "-") result = subtract(firstValue, secondValue);
    if (operator === "x") result = multiply(firstValue, secondValue);
    if (operator === "/") result = divide(firstValue, secondValue);

    // Display result
    clearDisplay();
    firstValue = result;
    updateDisplay();
}

export function updateDisplay() {
    /**
     * Updates the display text of calculator screen
     */
    displayString = `${firstValue} ${operator} ${secondValue}`;
    display.innerText = displayString;
}

export function updateNumber(value) {
    /**
     * Will automatically update the firstValue or secondValue variables
     * Depending upon an operator is selected or not
     * Also refresh display
     */
    if (operator === "") updateFirstValue(value);
    else updateSecondValue(value);
    updateDisplay();
}

export function updateOperator(newOperator) {
    /**
     * Update the operator variable and refresh display
     */
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
