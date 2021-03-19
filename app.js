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


// if(firstOperand === '' || secondOperand.length >= 1) {
//     equals.addEventListener('click', ()=> {
//         solution = solution + Number(secondOperand);
//         display.textContent = solution;
//             console.log('whyyyy')
// })
// }
// Storing Operator -----------------------------------------------------------------------------------------------------------------------------------------------

let operations = {
    add: document.querySelector('.add'),
    subtract: document.querySelector('.subtract'),
    multiply: document.querySelector('.multiply'),
    divide: document.querySelector('.divide')
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
    })
}

storingOperator();

// Perform operation -----------------------------------------------------------------------------------------------------------------------------------------
let solution = null;
function performingOperation() {
    equals.addEventListener('click', ()=> {
    switch(operatorChosen) {
        case 'add':
            performAddition(firstOperand, secondOperand);
            solution + secondOperand;
            break;
        case 'subtract':
            subtract(firstOperand, secondOperand);
            break;
        case 'multiply':
            multiply(firstOperand, secondOperand);
            break;
        case 'divide':
            divide(firstOperand, secondOperand);
    }
})
}

performingOperation();

// Solution -----------------------------------------------------------------------------------------------------------------------------------------------------------
let no = null;
function fixingSolution() {
    equals.addEventListener('click', ()=> {
        firstOperand = '';
        secondOperand = '';
        keepAdding = true;
    });
    if(no) {
        console.log('kjhkh')
    }
}
fixingSolution();
// Add -----------------------------------------------------------------------------------------------------------------------------------------------------------
function performAddition(a, b) {
    solution = (Number(a) + Number(b));
    display.textContent = solution;
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
    });
}
clear();



