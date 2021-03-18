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
let numberDisplayed = '';
// Finding Operands ---------------------------------------------------------------------------------------------------------------------------------------------
let firstOperand = '';
let secondOperand = '';
let keepAdding = true;
const operator = document.querySelectorAll('.operator');
function storingFirstOperand() {
    numbers.forEach(num => {
        num.addEventListener('click', () => {
            if(keepAdding) {
            firstOperand += num.textContent;
            display.textContent = firstOperand.substring(0, 12);
            }
            operator.forEach(operate => { 
                operate.addEventListener('click', ()=> {
                    keepAdding = false;
                });
            });
        });
    });
}
storingFirstOperand();
function storingSecondOperand() {
    operator.forEach(operate => {
        operate.addEventListener('click', ()=> {
            numbers.forEach(num => {
                num.addEventListener('click', ()=> {
                    secondOperand += num.textContent;
                    display.textContent = secondOperand.substring(0, 12);
                });
            });
        })
    })
}
storingSecondOperand()
// Add -----------------------------------------------------------------------------------------------------------------------------------------------------------
function performAddition(a, b) {
    display.textContent = (Number(a) + Number(b));
}

// Subtract ------------------------------------------------------------------------------------------------------------------------------------------------------
function subtract() {

}
// Multiply ------------------------------------------------------------------------------------------------------------------------------------------------------
function multiply() {

}
// Divide --------------------------------------------------------------------------------------------------------------------------------------------------------
function divide() {

}
// Operate -------------------------------------------------------------------------------------------------------------------------------------------------------
let yes = document.querySelector('.equals')
let solution = {
    add: document.querySelector('.add'),
    subtract: document.querySelector('.subtract')
}
function operate() {
    solution.add.addEventListener('click', ()=> {
        yes.addEventListener('click', ()=> {
            performAddition(firstOperand, secondOperand)
        })
    })
}
operate();
// Clear ---------------------------------------------------------------------------------------------------------------------------------------------------------
