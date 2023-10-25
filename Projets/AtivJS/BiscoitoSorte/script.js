const btnTry = document.querySelectorAll('#bntTry')
const btnReset = document.querySelectorAll('#btnReset')
const screenOne = document.querySelector('#screenOne')
const screenTwo = document.querySelector('#screenTwo')
let randomNumber = Math.round(Math.random() * 20)

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)


function handleTryClick() {
  toggleHide()

  switch (randomNumber) {
    case 1:
      screenTwo.querySelector('p').innerHTML = "Persista sempre, pois o amanhã depende da determinação que você tem hoje."
      break;
    case 2:
      screenTwo.querySelector('p').innerHTML = "Aprenda com erros passados, abrace o futuro, e encontre alegria no presente."
      break;
    case 3:
      screenTwo.querySelector('p').innerHTML = "O sucesso é fruto do trabalho árduo, paciência e crença inabalável em si."
      break;
    case 4:
      screenTwo.querySelector('p').innerHTML = "Pequenos gestos de bondade têm o poder de criar grandes mudanças no mundo."
      break;
    case 5:
      screenTwo.querySelector('p').innerHTML = "A jornada da vida é repleta de surpresas; abrace-as com gratidão e coragem."
      break;
    case 6:
      screenTwo.querySelector('p').innerHTML = "A felicidade está em compartilhar momentos preciosos com quem amamos de verdade."
      break;
    case 7:
      screenTwo.querySelector('p').innerHTML = "Aprenda com o ontem, viva intensamente o hoje e sonhe grande para o amanhã."
      break;
    case 8:
      screenTwo.querySelector('p').innerHTML = "Sorria sempre, pois a alegria contagia, ilumina corações e transcende barreiras."
      break;
    case 9:
      screenTwo.querySelector('p').innerHTML = "Cultive a paz interior, pois é a chave para viver em harmonia com o mundo."
      break;
    case 10:
      screenTwo.querySelector('p').innerHTML = "O amor é a luz que guia o coração em todas as estações da vida."
      break;
    case 11:
      screenTwo.querySelector('p').innerHTML = "A criatividade é a chave para desbloquear um mundo de possibilidades."
      break;
    case 12:
      screenTwo.querySelector('p').innerHTML = "A paciência é o segredo para alcançar objetivos grandiosos."
      break;
    case 13:
      screenTwo.querySelector('p').innerHTML = "A gentileza é uma virtude que deixa marcas eternas no coração."
      break;
    case 14:
      screenTwo.querySelector('p').innerHTML = "A simplicidade é a verdadeira essência da felicidade duradoura."
      break;
    case 15:
      screenTwo.querySelector('p').innerHTML = "A sabedoria está na jornada, não no destino final."
      break;
    case 16:
      screenTwo.querySelector('p').innerHTML = "Sonhe alto, pois os sonhos são o mapa para o seu futuro."
      break;
    case 17:
      screenTwo.querySelector('p').innerHTML = "Cada dia é uma oportunidade para recomeçar e alcançar seus objetivos."
      break;
    case 18:
      screenTwo.querySelector('p').innerHTML = "A gratidão transforma o que temos em suficiente e mais."
      break;
    case 19:
      screenTwo.querySelector('p').innerHTML = "O segredo da felicidade está em ser verdadeiramente você mesmo."
      break;
    case 20:
      screenTwo.querySelector('p').innerHTML = "O sucesso não é o destino, mas a jornada que você escolhe."
      break;
    default:
      screenTwo.querySelector('p').innerHTML = "Descubra a força interior que reside em você; você é mais forte do que pensa."
      break;
  }
}

function handleResetClick() {
  toggleHide()
  randomNumber = Math.round(Math.random() * 10)

}

function toggleHide() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')

}

