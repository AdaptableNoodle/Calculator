// 1. Basic Math Operators

const add = function(a,b) {
    return a+b
};

const substract = function(a,b) {
    return a-b
};

const multiply = function(a,b) {
    return a*b
};

const divide = function(a,b) {
    
    return Math.round((a/b) * 100000) / 100000
};

// 2. Operate Function

const operate = function(a,b,ops) {
    switch (ops) {
        case 'add':
            finalNumber = add(a,b);
            return finalNumber
        break;

        case 'substract':
            finalNumber = substract(a,b);
            return finalNumber
        break;

        case 'multiply':
            finalNumber = multiply(a,b);
            return finalNumber
        break;

        case 'divide':
            if (b != 0){
            finalNumber = divide(a,b);
            return finalNumber
            }
            else {
                return onscreen.textContent = 'Division by Zero'
            }
        break;
        default:
        return onscreen.textContent = 'Syntax Error'
    }
}

// 3. Event-Handlers & Global Variables

const calculator= document.querySelector('.calculator');
const screen = document.querySelector('.screen');
const onscreen = document.querySelector('.onscreen');
const grid = document.querySelector('.grid');
const fila = document.querySelector('.fila');

let currentNumber = ""
let firstNumber = "";
let secondNumber = "";
let finalNumber = "";
let displayNumber = "0";
let stepNumber = "one";
let currentOperator = "init";

onscreen.textContent = displayNumber;

// Button Function
// Button is a variable that is attached to all buttons with class "btn"
// Each time one of this button is press -> (1) 

const buttons = document.querySelectorAll('div.fila>button.btn');
buttons.forEach(function(button){
        button.addEventListener("click", function(event){
    
            switch (stepNumber) {
                case 'one':
                    firstNumber += button.getAttribute('data-number');
                    displayNumber = firstNumber;
                    onscreen.textContent = displayNumber;
                    break;

                case 'two':
                    secondNumber += button.getAttribute('data-number');
                    displayNumber = secondNumber;
                    onscreen.textContent = displayNumber;
                    break;
            }
        });
    });


// Decimal, Operator, Equal & Clear Function

const operators = document.querySelectorAll('div.fila>button.operator');
    operators.forEach(function(operator){
        operator.addEventListener("click", function(event){
            if (currentOperator == "init") {
            currentOperator = operator.getAttribute('data-operator');
            stepNumber = "two";
            }
            else {
            finalNumber = operate(parseInt(firstNumber),parseInt(secondNumber),currentOperator);
            firstNumber = finalNumber;
            secondNumber = "";
            displayNumber = finalNumber;
            onscreen.textContent = displayNumber;
            currentOperator = operator.getAttribute('data-operator');
            stepNumber = "two";
            }
        });
    });

const equal = document.querySelector('div.fila>button#equal');
    equal.addEventListener("click", function(event){
        finalNumber = operate(parseFloat(firstNumber),parseFloat(secondNumber),currentOperator);
        displayNumber = finalNumber;
        onscreen.textContent = displayNumber;
    });
    
const clear = document.querySelector('div.fila>button#clear');
    clear.addEventListener("click", function(event){
        console.log("CLEAR");
        firstNumber = "";
        secondNumber = "";
        finalNumber = "";
        displayNumber = "0";
        stepNumber = "one";
        currentOperator = "init";
        onscreen.textContent = displayNumber;
    });

const decimal = document.querySelector('div.fila>button.decimal');
    decimal.addEventListener("click", function(event){
        if (stepNumber == 'one' && firstNumber.includes(".") != true){
            firstNumber += decimal.getAttribute('data-number');
            displayNumber = firstNumber;
            onscreen.textContent = displayNumber;
        }
    
        if (stepNumber == 'two' && secondNumber.includes(".") != true){
            secondNumber += decimal.getAttribute('data-number');
            displayNumber = secondNumber;
            onscreen.textContent = displayNumber;
        };
    });

const back = document.querySelector('div.fila>button#back');
    back.addEventListener("click", function(event){
        if (stepNumber == 'one'){
            firstNumber = firstNumber.slice(0, -1);
            displayNumber = firstNumber;
            onscreen.textContent = displayNumber;
        }
    
        if (stepNumber == 'two'){
            secondNumber = secondNumber.slice(0, -1);
            displayNumber = secondNumber;
            onscreen.textContent = displayNumber;
        };
    });
