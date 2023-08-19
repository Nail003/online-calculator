import {
    assignLastAnswerToCurrentValue,
    changeSign,
    clearDisplay,
    operate,
    undoValue,
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
    operate();
}

export function clearButtonHandler() {
    clearDisplay();
}

export function changeSignButtonHandler() {
    changeSign();
}

export function delButtonHandler() {
    undoValue();
}

export function answerButtonHandler() {
    assignLastAnswerToCurrentValue();
}
