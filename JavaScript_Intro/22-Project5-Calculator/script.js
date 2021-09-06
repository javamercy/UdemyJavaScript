const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");


let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {

    display.value = displayValue;
}

keys.addEventListener("click", function(e) {

    const element = e.target;

    if (!element.matches("button")) return;

    switch (element.value) {

        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(element.value);
            break;

        case ".":
            inputDecimal();
            break;

        case "clear":
            clear();
            break;

        default:
            inputNumber(element.value);




    }



    updateDisplay();
});

function handleOperator(nextOperator) {

    const value = parseFloat(displayValue);
    if (operator && waitingForSecondValue) {

        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {

        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;

    }
    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitingForSecondValue);

}

function calculate(first, second, operator) {

    if (operator === "+") {

        return first + second;

    } else if (operator === "-") {

        return first - second;

    } else if (operator === "*") {

        return first * second;

    } else if (operator === "/") {

        return first / second;
    } else {
        return second;
    }
}


function inputNumber(number) {
    if (waitingForSecondValue) {

        displayValue = number;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === "0" ? number : displayValue + number;

    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal() {

    if (!displayValue.includes(".") && displayValue !== "0") {
        displayValue += ".";

    }
}

function clear() {

    displayValue = "0";
}