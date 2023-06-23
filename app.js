const squares = document.querySelectorAll(".square")
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const time = document.querySelector('#time')

let result = 0
let hitPosition ;
let currentTime = 60

function randomSquares (){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}
    squares.forEach(square =>{
        square.addEventListener('mousedown' , ()=>{
            if(square.id == hitPosition){
                result++
                score.innerHTML = result
                hitPosition = null
            }
        })
    })


function moveMole(){
    timerId = null;
    timerId= setInterval(randomSquares , 1000)
}
moveMole()

function countDown(){
    currentTime --
    time.innerHTML= currentTime
    if(currentTime == 0){
        clearInterval(countDownTimerId )
        clearInterval(timerId)
        alert("GAME OVER ! your score is  "+ result)
    }
}

let countDownTimerId = setInterval(countDown , 1000)
