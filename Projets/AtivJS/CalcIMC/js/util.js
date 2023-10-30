export {isANumber, calcIMC}

function isANumber(value) {
  return isNaN(value) || value == ''
}

function calcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
