const numbers = document.querySelectorAll('.number-btn')
const operations = document.querySelectorAll('.operator')
const display = document.querySelector('.calculator-display h1')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const switchSigns = document.querySelector('.switch-signs')
let firstNumber = ''
let secondNumber = ''
let operator = ''

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

const remainder = (a, b) => {
  return a%b
}

numbers.forEach((num) => {
  num.addEventListener('click', () => {
    // display.textContent = num.textContent
    if (typeof firstNumber !== 'number' && operator === '') {
      firstNumber += num.textContent
      display.textContent = firstNumber
      // firstNumber = Number(num.textContent)
    } else if (firstNumber === Number(firstNumber) && operator.length > 0) {
      secondNumber += num.textContent
      display.textContent = secondNumber
      // secondNumber = Number(num.textContent)
    }
  })
})

const cleanUp = (result) => {
  display.textContent = result
  firstNumber = result
  secondNumber = ''
  operator = ''
}

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
  } else if(operator==='remainder') {
    const result = remainder(firstNumber, secondNumber)
    cleanUp(result)
  }
}

switchSigns.addEventListener('click', () => {
  if((firstNumber.length > 0 || typeof firstNumber === 'number')&& secondNumber.length < 1) {
    firstNumber = Number(firstNumber)
    firstNumber = firstNumber*-1
    display.textContent = firstNumber
  } else if(typeof firstNumber === 'number' && (secondNumber.length > 0|| typeof secondNumber === 'number')) {
    secondNumber = Number(secondNumber)
    secondNumber = secondNumber*-1
    display.textContent = secondNumber
  }
})

equals.addEventListener('click', () => {
  doOperations()
})

clear.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.textContent = '0'
})

operations.forEach((operation) => {
  operation.addEventListener('click', () => {
    firstNumber = Number(firstNumber)
    if (operator === '') {
      operator = operation.classList[1]
    } else if (operator.length > 0) {
      console.log('do something')
      console.log(`${firstNumber} ${operator} ${secondNumber}`)
      doOperations()
      operator = operation.classList[1]
    }
  })
})
