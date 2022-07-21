const adviceEl = document.querySelector('#advice')
const adviceNumEl = document.querySelector('#advice-num')
const diceContainer = document.querySelector('.dice-container')

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const aboutAdvice = await response.json()
    adviceEl.textContent = aboutAdvice.slip.advice
    adviceNumEl.textContent =  aboutAdvice.slip.id
}


diceContainer.addEventListener('click', getAdvice)
document.addEventListener('DOMContentLoaded', getAdvice)