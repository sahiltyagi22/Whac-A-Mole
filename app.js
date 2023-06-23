const squares = document.querySelectorAll(".square")
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const time = document.querySelector('#time')

let result = 0

function randomSquares (){
    squares.forEach(square =>{
        square.classList.remove('mole')

    })
    let randomPosition = squares[Math.floor(Math.random()*9)]
    console.log(randomPosition);
    randomPosition.classList.add('mole')
}

randomSquares()