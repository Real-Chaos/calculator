const numbers = document.querySelectorAll('.number-btn')
const operations = document.querySelectorAll('.operator')
const display = document.querySelector('.calculator-display h1')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
let firstNumber = null
let secondNumber = null
let operator = ''

numbers.forEach((num) => {
  num.addEventListener('click', () => {
    display.textContent = num.textContent
    if (firstNumber === null && operator === '') {
      firstNumber = Number(num.textContent)
    } else if (firstNumber === Number(firstNumber) && operator.length > 0) {
      secondNumber = Number(num.textContent)
    }
  })
})

const cleanUp = (result) => {
  display.textContent = result
  firstNumber = result
  secondNumber = null
  operator = ''
}

const doOperations = () => {
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
  }
}

equals.addEventListener('click', () => {
  doOperations()
})

clear.addEventListener('click', () => {
  firstNumber = null
  secondNumber = null
  operator = ''
  display.textContent = '0'
})

operations.forEach((operation) => {
  operation.addEventListener('click', () => {
    if (operator === '') {
      operator = operation.classList[1]
    } else if(operator.length > 0) {
      console.log('do something')
      console.log(`${firstNumber} ${operator} ${secondNumber}`)
      doOperations()
      operator = operation.classList[1]
    }
  })
})
const sum = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return a / b
}
