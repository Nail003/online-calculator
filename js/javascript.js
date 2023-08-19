import {
    answerButtonHandler,
    assignButtonHandler,
    changeSignButtonHandler,
    clearButtonHandler,
    delButtonHandler,
    numberButtonHandler,
    operatorButtonHandler,
} from "./eventHandlers.js";

// Assigning click and keyboard events to all calculator buttons
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const clearButton = document.querySelector(".clearButton");
const assignButton = document.querySelector(".assignButton");
const changeSignButton = document.querySelector(".changeSignButton");
const delButton = document.querySelector(".delButton");
const answerButton = document.querySelector(".answerButton");

numberButtons.forEach((button) => {
    button.addEventListener("click", numberButtonHandler);
    addKeyboardEvent(button, numberButtonHandler);
});
operatorButtons.forEach((button) => {
    button.addEventListener("click", operatorButtonHandler);
    addKeyboardEvent(button, operatorButtonHandler);
});
clearButton.addEventListener("click", clearButtonHandler);
addKeyboardEvent({ innerText: "Delete" }, clearButtonHandler);
assignButton.addEventListener("click", assignButtonHandler);
addKeyboardEvent(assignButton, assignButtonHandler);
addKeyboardEvent({ innerText: "Enter" }, assignButtonHandler);
changeSignButton.addEventListener("click", changeSignButtonHandler);
delButton.addEventListener("click", delButtonHandler);
addKeyboardEvent({ innerText: "Backspace" }, delButtonHandler);
answerButton.addEventListener("click", answerButtonHandler);

function addKeyboardEvent(domElement, handlerFunction) {
    document.addEventListener("keydown", (e) => {
        if (e.key === domElement.innerText)
            handlerFunction({ target: domElement });
    });
}
