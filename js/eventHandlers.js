import {
    updateDisplay,
    clearDisplay,
    updateNumber,
    updateOperator,
} from "./calculator.js";

export function numberButtonHandler(e) {
    updateNumber(e.target.innerText);
}

export function operatorButtonHandler(e) {
    updateOperator(e.target.innerText);
}

export function assignButtonHandler(e) {
    console.log(e.target.innerText);
}

export function clearButtonHandler() {
    clearDisplay();
}
