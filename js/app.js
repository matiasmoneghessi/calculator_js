class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        previousOperandTextElement = previousOperandTextElement
        currentOperandTextElement = currentOperandTextElement
    }
}

const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalButton = document.querySelectorAll('[equal]')
const clearButton = document.querySelectorAll('[clear]')
const allClearButton = document.querySelectorAll('[allClear]')
const previousOperandTextElement = document.querySelectorAll('[previous]')
const currentOperandTextElement = document.querySelectorAll('[current]')
