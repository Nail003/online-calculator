import { updateDisplay, clearDisplay } from "./calculator.js";

export function numberButtonHandler(e) {
    updateDisplay(e.target.innerText);
}

export function clearButtonHandler() {
    clearDisplay();
}
