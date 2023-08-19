import { add, subtract, multiply, divide } from "./math.js";

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
