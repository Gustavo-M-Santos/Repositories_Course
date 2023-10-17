let numberOne = Number(prompt('Qual é o primeiro numero?'))
let numberTwo = Number(prompt('Qual é o segundo numero?'))


  function contMats(numberOne, numberTwo) {

    let resultCont1 = numberOne + numberTwo
    let resultCont2 = numberOne - numberTwo
    let resultCont3 = numberOne * numberTwo
    let resultCont4 = numberOne / numberTwo
    let resultCont5 = numberOne % numberTwo

    if (numberOne == numberTwo) {
      alert('Os números fornecidos são iguais.')
    } else {
      alert('Os números fornecidos são diferentes.')
    }

    function confNumberOddPair(resulteCont) {
       if ((resulteCont % 2) == 0) {
        return 'par'
      } else {
        return 'impar'
      }
    }

    alert(`
      O resultado da conta é: ${resultCont1}. Sendo número o resultado ${confNumberOddPair(resultCont1)}

      O resultado da conta é: ${resultCont2}. Sendo número o resultado ${confNumberOddPair(resultCont2)}

      O resultado da conta é: ${resultCont3}. Sendo número o resultado ${confNumberOddPair(resultCont3)}

      O resultado da conta é: ${resultCont4}. Sendo número o resultado ${confNumberOddPair(resultCont4)}

      O resultado da conta é: ${resultCont5}. Sendo número o resultado ${confNumberOddPair(resultCont5)}
    `)
  }

  contMats(numberOne, numberTwo)
