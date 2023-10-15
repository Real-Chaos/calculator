// ---------------------- Declaring Variables ------------------ //

const numbers = document.querySelectorAll('.number-btn')
const operations = document.querySelectorAll('.operator')
const display = document.querySelector('.calculator-display h1')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const switchSigns = document.querySelector('.switch-signs')
let firstNumber = ''
let secondNumber = ''
let operator = ''

// ---------------------- Adding Event Listeners ------------------ //

equals.addEventListener('click', () => {
  doOperations()
})

const clearCalculator = () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.textContent = '0'
}

clear.addEventListener('click', clearCalculator)

// ---------------------- Declaring calculator functions ------------------ //

const sum = (a, b) => {
  const addition = a + b
  return +parseFloat(addition).toFixed( 6 )
}

const subtract = (a, b) => {
  const subtract = a - b
  return +parseFloat(subtract).toFixed(6)
}

const multiply = (a, b) => {
  const multiply = a * b
  return +parseFloat(multiply).toFixed(6)
}

const divide = (a, b) => {
  const division = a / b
  return +parseFloat(division).toFixed(6)
}

const remainder = (a, b) => {
  return a % b
}

// ---------------------- updating Numbers ------------------ //

const updateNumber = (num) => {
  if (typeof firstNumber !== 'number' && operator === '') {
    if (num === '.' && !firstNumber.includes('.')) {
      firstNumber += num
      display.textContent = firstNumber
      return
    } else if (num === '.' && firstNumber.includes('.')) return
    firstNumber += num
    display.textContent = firstNumber
    console.log(firstNumber.includes('.'))
  } else if (firstNumber === Number(firstNumber) && operator.length > 0) {
    if (num === '.' && !secondNumber.includes('.')) {
      secondNumber += num
      display.textContent = secondNumber
      return
    } else if (num === '.' && secondNumber.includes('.')) return
    if (secondNumber == 0) secondNumber = num
    else secondNumber += num
    display.textContent = secondNumber
  }
}

const updatingNumbers = () => {
  numbers.forEach((num) => {
    num.addEventListener('click', () => updateNumber(num.textContent))
  })
}


// ---------------------- Keyboard support ------------------ //

document.addEventListener('keydown', (e) => {
  if (isFinite(e.key) || e.key===".") {
    e.preventDefault()
    updateNumber(e.key)
  } else if (e.key === 'Backspace') {
    clearCalculator()
  } else if (e.key === '+') {
    doOperations()
    operator = 'add'
  } else if (e.key === '-') {
    doOperations()
    operator = 'subtract'
  } else if (e.key === '*') {
    doOperations()
    operator = 'multiply'
  } else if (e.key === '/') {
    doOperations()
    operator = 'divide'
  } else if (e.key === 'Enter') {
    doOperations()
  } 
})

// ---------------------- Doing Operations ------------------ //

const doOperations = () => {
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  if (operator === 'add') {
    const result = sum(firstNumber, secondNumber)
    cleanUp(result)
  } else if (operator === 'subtract') {
    const result = subtract(firstNumber, secondNumber)
    cleanUp(result)
  } else if (operator === 'multiply') {
    const result = multiply(firstNumber, secondNumber)
    cleanUp(result)
  } else if (operator === 'divide') {
    const result = divide(firstNumber, secondNumber)
    cleanUp(result)
  } else if (operator === 'remainder') {
    const result = remainder(firstNumber, secondNumber)
    cleanUp(result)
  }
}

// ---------------------- swtiching signs ------------------ //

const addSwitchingSigns = () => {
  switchSigns.addEventListener('click', () => {
    if (
      (firstNumber.length > 0 || typeof firstNumber === 'number') &&
      secondNumber.length < 1
    ) {
      firstNumber = Number(firstNumber)
      firstNumber = firstNumber * -1
      display.textContent = firstNumber
    } else if (
      typeof firstNumber === 'number' &&
      (secondNumber.length > 0 || typeof secondNumber === 'number')
    ) {
      secondNumber = Number(secondNumber)
      secondNumber = secondNumber * -1
      display.textContent = secondNumber
    }
  })
}

// ---------------------- Updating Operators ------------------ //

const updatingOperator = () => {
  operations.forEach((operation) => {
    operation.addEventListener('click', () => {
      firstNumber = Number(firstNumber)
      if (operator === '') {
        operator = operation.classList[1]
      } else if (operator.length > 0) {
        doOperations()
        operator = operation.classList[1]
      }
    })
  })
}

// ---------------------- Cleanup Function ------------------ //

const cleanUp = (result) => {
  display.textContent = result
  firstNumber = result
  secondNumber = ''
  operator = ''
}

// ---------------------- calling variables ------------------ //

updatingNumbers()
addSwitchingSigns()
updatingOperator()
