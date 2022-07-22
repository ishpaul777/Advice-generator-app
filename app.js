const adviceEl = document.querySelector('#advice')
const adviceNumEl = document.querySelector('#advice-num')
const jokeEl = document.querySelector('#joke')
const jokeNumEl = document.querySelector('#joke-num')
const adviceDiceContainer = document.querySelector('.advice-dice')
const jokeDiceContainer = document.querySelector('.joke-dice')

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const aboutAdvice = await response.json()
    adviceEl.textContent = aboutAdvice.slip.advice
    adviceNumEl.textContent =  aboutAdvice.slip.id
}

async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeData = await response.json();
    jokeEl.textContent = jokeData.joke
    jokeNumEl.textContent =  jokeData.id
  }


adviceDiceContainer.addEventListener('click', (e)=> {
    e.preventDefault()
    adviceEl.textContent = 'loading..'
    adviceNumEl.textContent =  'loading...'
    setTimeout(() => {
        getAdvice()
    }, 700); 
})
jokeDiceContainer.addEventListener('click', (e)=> {
    e.preventDefault()
    jokeEl.textContent = 'loading..'
    jokeNumEl.textContent =  'loading...'
    setTimeout(() => {
        fetchJoke()
    }, 700); 
});

document.addEventListener('DOMContentLoaded', ()=> {
    adviceEl.textContent = 'loading..'
    adviceNumEl.textContent =  'loading...'
    jokeEl.textContent = 'loading..'
    jokeNumEl.textContent =  'loading...'
    setTimeout(() => {
        getAdvice()
    }, 1000); 
    setTimeout(() => {
        fetchJoke()
    }, 1000); 
    getAdvice();
    fetchJoke();
});