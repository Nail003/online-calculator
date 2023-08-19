import { updateDisplay, clearDisplay } from "./calculator.js";

export function numberButtonHandler(e) {
    updateDisplay(e.target.innerText);
}

export function operatorButtonHandler(e) {
    console.log(e.target.innerText);
}

export function assignButtonHandler(e) {
    console.log(e.target.innerText);
}

export function clearButtonHandler() {
    clearDisplay();
}
