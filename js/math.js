export function add(a, b) {
    /**
     * Return the sum of two numbers
     */
    return a + b;
}

export function subtract(a, b) {
    /**
     * Return the difference of two numbers
     */
    return a - b;
}

export function multiply(a, b) {
    /**
     * Return the product of two numbers
     */
    return a * b;
}

export function divide(a, b) {
    /**
     * Return the result of division of first number with second
     * For divisible by zero error it returns error string `Cannot divide a by b`
     */
    return b === 0 ? `Cannot divide ${a} by ${b}` : a / b;
}
