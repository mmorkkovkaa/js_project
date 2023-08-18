// gmail input

const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^(?![!@#$%^&*()+=\-[\]{}|;:'",.<>/?]).*[0-9a-zA-Z.]{6,30}@gmail.com$/


gmailCheck.onclick = () =>{
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'хокаге одобрил!!!'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'хокаге не одобряет введённый gmail'
        gmailResult.style.color = 'red'
    }
}

//recurs

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock =()=>{
    if (positionX < 650 && positionY === 0){
        positionX++
        childBlock.style.left=`${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= 650 && positionY < 400){
        positionY++
        childBlock.style.top=`${positionY}px`
        setTimeout(moveBlock, 1)
    }else if (positionX > 0  && positionY === 400){
        positionX--
        childBlock.style.left=`${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX === 0 && positionY > 0){
        positionY--
        childBlock.style.top=`${positionY}px`
        setTimeout(moveBlock, 1)
    }


}
moveBlock()

//time
const seconds = document.querySelector('#seconds')
const start_button = document.querySelector('#start')
const stop_button = document.querySelector('#stop')
const resume_button = document.querySelector('#resume')
const reset_button = document.querySelector('#reset')

let time = 0
let interval
const timer =()=>{
    if(time < 750){
        time++
        seconds.innerHTML = time
    }
}

start_button.addEventListener('click', () => {
    interval = setInterval(timer, 10)

})

stop_button.addEventListener('click', ()=>{
    clearInterval(interval)
    start_button.disabled = true
})

resume_button.addEventListener('click', ()=>{
    interval = setInterval(timer, 10)

})

reset_button.addEventListener('click', ()=>{
    clearInterval(interval);
    time = 0;
    seconds.innerHTML = time
    start_button.disabled = false

})

