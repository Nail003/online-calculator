import { add, subtract, multiply, divide } from "./math.js";

//Constants
const DEFAULT_VALUE = "";

// Calculator variable
let displayString = DEFAULT_VALUE;
let firstValue = DEFAULT_VALUE;
let secondValue = DEFAULT_VALUE;
let operator = DEFAULT_VALUE;

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

    // Edge Case: No complete input
    if (
        (operator === DEFAULT_VALUE || typeof secondValue !== "number") &&
        typeof firstValue === "number"
    )
        return;

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
    if (operator === DEFAULT_VALUE) updateFirstValue(value);
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
    firstValue = DEFAULT_VALUE;
    secondValue = DEFAULT_VALUE;
    operator = DEFAULT_VALUE;
    updateDisplay();
    display.innerText = "(*_*)";
}

export function changeSign() {
    /**
     * Will automatically change the sign of firstValue or secondValue variables
     * Depending on whether an operator is selected or not
     * Also refresh display
     */
    if (operator === DEFAULT_VALUE || secondValue === DEFAULT_VALUE)
        firstValue *= -1;
    else secondValue *= -1;
    updateDisplay();
}

function updateFirstValue(value) {
    /**
     * Function to update variable firstValue
     */
    if (typeof firstValue !== "number") firstValue = +value;
    else {
        firstValue *= 10;
        firstValue += +value;
    }
}

function updateSecondValue(value) {
    /**
     * Function to update variable secondValue
     */
    if (typeof secondValue !== "number") secondValue = +value;
    else {
        secondValue *= 10;
        secondValue += +value;
    }
}
