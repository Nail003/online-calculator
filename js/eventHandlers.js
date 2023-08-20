import {
    assignLastAnswerToCurrentValue,
    changeSign,
    clearDisplay,
    clearStorage,
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
    clearStorage();
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
