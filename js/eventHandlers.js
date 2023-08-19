import { updateDisplay } from "./calculator.js";

export function numberButtonHandler(e) {
    updateDisplay(e.target.innerText);
}
