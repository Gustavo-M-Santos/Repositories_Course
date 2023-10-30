import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";
import {isANumber,calcIMC} from "./util.js"
// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    const heightOrWeightIsNotANumber = isANumber(inputHeight.value) || isANumber(inputWeight.value)

    if(heightOrWeightIsNotANumber){
      AlertError.open()
      return;
    }
    AlertError.close()

    const result = calcIMC(weight, height)
    displayResultMessage(result)
  }

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}

inputHeight.oninput, inputWeight.oninput = () =>{
  AlertError.close()
}
