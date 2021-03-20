// Home ---------------------------------------------------------------------------------------------------------------------------------------------------------

const container = document.querySelector('main')
const home = document.querySelector('.home');
let screenState = true;

function homeButton() {
    window.addEventListener('load', ()=> {
        container.style.opacity = '0';
    })
    home.addEventListener('click', () => {
        if(screenState === true) {
            screenState = false;
            container.style.opacity = '1';
        }
        else if(screenState === false){
            screenState = true;
            container.style.opacity = '0';
        }
    });
}

homeButton();

// Display Numbers -----------------------------------------------------------------------------------------------------------------------------------------------

const display = document.querySelector('.displaySection');
const numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('.decimal')
// Finding Operands ---------------------------------------------------------------------------------------------------------------------------------------------
let firstOperand = '';
let secondOperand = '';
let keepAdding = true;
let equals = document.querySelector('.equals')
let operators = document.querySelectorAll('.operator')

function storingOperands() {
        numbers.forEach(num => {
            num.addEventListener('click', ()=> {
                switch(keepAdding) {
                    case true:
                        firstOperand += num.textContent;
                        display.textContent = firstOperand;
                        break;
                    case false:
                        secondOperand += num.textContent;
                        display.textContent = secondOperand;
                        if(!(secondOperand.includes('.'))) {
                            decimalInOperandTwo();
                        }
                        break;
                }
            })
        })
}

storingOperands();

function turnKeepAddingTOFalse() {
    operators.forEach(operate => {
        operate.addEventListener('click', ()=> {
            keepAdding = false;
        });
    });
}

turnKeepAddingTOFalse();
// Storing Operator -----------------------------------------------------------------------------------------------------------------------------------------------

let operations = {
    add: document.querySelector('.add'),
    subtract: document.querySelector('.subtract'),
    multiply: document.querySelector('.multiply'),
    divide: document.querySelector('.divide'),
    remainder: document.querySelector('.remainder')
}

let operatorChosen = null;

function storingOperator() {
    operators.forEach(operate => {
        operations.add.addEventListener('click', ()=> {
            operatorChosen = 'add';
        });
        operations.subtract.addEventListener('click', ()=> {
            operatorChosen = 'subtract';
        });
        operations.multiply.addEventListener('click', ()=> {
            operatorChosen = 'multiply';
        });
        operations.divide.addEventListener('click', ()=> {
            operatorChosen = 'divide';
        });
        operations.remainder.addEventListener('click', ()=> {
            operatorChosen = 'remainder';
        });
    })
}

storingOperator();

// Perform operation -----------------------------------------------------------------------------------------------------------------------------------------
let solution = null;
let answer = null;

function performingOperation(operationPerformer) {
    
    operationPerformer.addEventListener('click', ()=> {
    switch(operatorChosen) {
        case 'add':
            answer = performAddition(firstOperand, secondOperand);
            break;
        case 'subtract':
            answer = subtract(firstOperand, secondOperand);
            break;
        case 'multiply':
            answer = multiply(firstOperand, secondOperand);
            break;
        case 'divide':
            answer = divide(firstOperand, secondOperand);
            break;
        case 'remainder':
            answer = remainderOf(firstOperand, secondOperand);
    }
})
}
performingOperation(equals);

// Solution -----------------------------------------------------------------------------------------------------------------------------------------------------------

function fixingSolution() {
secondOperand = '';
    equals.addEventListener('click', ()=> {
        secondOperand = '';
        firstOperand = answer;
    });
}
fixingSolution();

// Add -----------------------------------------------------------------------------------------------------------------------------------------------------------
function performAddition(a, b) {
    solution = (Number(a) + Number(b));
    display.textContent = solution;
    return solution;
}

// Subtract ------------------------------------------------------------------------------------------------------------------------------------------------------
function subtract(a, b) {
    solution = (Number(a) - Number(b));
    display.textContent = solution;
    return solution;
}
// Multiply ------------------------------------------------------------------------------------------------------------------------------------------------------
function multiply(a, b) {
    solution = (Number(a) * Number(b));
    display.textContent = solution;
    return solution;
}
// Divide --------------------------------------------------------------------------------------------------------------------------------------------------------
function divide(a, b) {
    solution = (Number(a) / Number(b));
    display.textContent = solution;
    if(a === '0' || b === '0') {
        display.textContent = 'Quack Quack!';
    }
    return solution;
}
// Remainder -----------------------------------------------------------------------------------------------------------------------------------------------------
function remainderOf(a, b) {
    solution = (Number(a) % Number(b));
    display.textContent = solution;
    return solution;
}
// Clear ---------------------------------------------------------------------------------------------------------------------------------------------------------
function clear() {
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener ('click', ()=> {
        display.textContent = '0';
        firstOperand = '';
        secondOperand = '';
        keepAdding = true;
        checkDecimal();
    });
}
clear();

// Decimal ------------------------------------------------------------------------------------------------------------------------------
function checkDecimal() {
    let decimalInOperand = false;
    decimal.addEventListener('click', ()=> {
        if(decimalInOperand === false){
        firstOperand += decimal.textContent;
        decimalInOperand = true;
        }
    });
}
checkDecimal();

function decimalInOperandTwo() {
    let decimalInSecondOperand = false;
    decimal.addEventListener('click', ()=> {
        if(decimalInSecondOperand === false){
            secondOperand += decimal.textContent;
            decimalInSecondOperand = true;
        }
    });
}

