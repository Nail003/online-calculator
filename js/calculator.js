import { add, subtract, multiply, divide } from "./math.js";

//Constants
const DEFAULT_VALUE = "";

// Calculator variable
let displayString = DEFAULT_VALUE;
let firstValue = DEFAULT_VALUE;
let secondValue = DEFAULT_VALUE;
let operator = DEFAULT_VALUE;
let lastAnswer = DEFAULT_VALUE;
let lastOperator = DEFAULT_VALUE;
let lastSecondValue = DEFAULT_VALUE; // For consecutive equal presses

// Flags
let decimalFlag = false; // When user press decimal button turn it to true

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

    //Edge Case: Consecutive equal sign presses (Needs to be at the top)
    handleConsecutiveAssigns();

    // Edge Case: No complete input
    if (isNoTCompleteInput()) return;

    // Find result
    if (operator === "+") result = add(firstValue, secondValue);
    if (operator === "-") result = subtract(firstValue, secondValue);
    if (operator === "x") result = multiply(firstValue, secondValue);
    if (operator === "/") result = divide(firstValue, secondValue);

    // Storing result and operator
    lastAnswer = result;
    lastOperator = operator;

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

export function clearStorage() {
    /**
     * Clears the stored values of calculator
     */
    lastAnswer = DEFAULT_VALUE;
    lastOperator = DEFAULT_VALUE;
    lastSecondValue = DEFAULT_VALUE;
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

export function undoValue() {
    /**
     * Function to undo user inputs
     */
    if (operator === DEFAULT_VALUE) {
        firstValue = +("" + firstValue).slice(0, -1);
    } else if (secondValue === DEFAULT_VALUE) {
        operator = "";
    } else {
        secondValue = ("" + secondValue).slice(0, -1);
    }

    updateDisplay();
}

export function assignLastAnswerToCurrentValue() {
    /**
     * Assign last answer to current selected variable
     */
    if (lastAnswer === DEFAULT_VALUE) return;
    if (operator === DEFAULT_VALUE) firstValue = lastAnswer;
    else secondValue = lastAnswer;
    updateDisplay();
}

function updateFirstValue(value) {
    /**
     * Function to update variable firstValue
     */
    firstValue = updateValueHelper(firstValue, value);
}

function updateSecondValue(value) {
    /**
     * Function to update variable secondValue
     */
    secondValue = updateValueHelper(secondValue, value);
}

function updateValueHelper(variable, value) {
    /**
     * Helper function to update number variables
     */
    // Reset consecutive equal button presses
    lastSecondValue = DEFAULT_VALUE;

    // For decimal dot
    if (value === ".") {
        if (("" + variable).includes(".")) return variable;
        decimalFlag = true;
        return variable + value;
    }

    //Handle integer to decimal conversion
    if (decimalFlag) {
        decimalFlag = false;
        variable += value;
        return +variable;
    }

    // Condition below is here to handle firstValue as firstValue is also used to display text messages
    if (typeof variable !== "number" || variable === Infinity) return +value;
    variable += value;
    return +variable;
}

function handleConsecutiveAssigns() {
    /**
     * Add functionality to handle consecutive equal button presses
     * Behaves the same way as in regular calculators
     */
    lastSecondValue =
        lastSecondValue === DEFAULT_VALUE ? secondValue : lastSecondValue;
    if (
        lastOperator !== DEFAULT_VALUE &&
        secondValue === DEFAULT_VALUE &&
        operator === DEFAULT_VALUE
    ) {
        operator = lastOperator;
        secondValue = lastSecondValue;
    }
}

function isNoTCompleteInput() {
    /**
     * Checks whether the user have given input for firstValue, secondValue and operator
     */
    if (
        (operator === DEFAULT_VALUE || typeof secondValue !== "number") &&
        typeof firstValue === "number"
    )
        return true;
    return false;
}
