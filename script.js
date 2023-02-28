// console.log('hello')
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// Promises leads to asynchronous functions

const dogImageDiv = document.getElementById('dogImage')
const hello = document.querySelector('.hello')

const Btn = document.getElementById('btn')

Btn.onclick = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML = `<img src = '${json.message}' height= 300, width=350/>`      
  })
} 
