// gmail input

const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^(?![!@#$%^&*()+=\-[\]{}|;:'",.<>/?]).*[0-9a-zA-Z.]{6,30}@gmail.com$/


gmailCheck.onclick = () =>{
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'корректное имя пользователя'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'это имя пользователя некорректно'
        gmailResult.style.color = 'red'
    }
}

//recurs

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let count = 0


// let colorIndex = 0;
// const colors = ['blue', 'red', 'green', 'yellow', 'purple'];

const moveBlock =()=>{
    if (count < parentBlock.clientWidth - childBlock.clientWidth){
        count += 50
        childBlock.style.left = count + 'px'


        // colorIndex = (colorIndex + 1) % colors.length;
        // childBlock.style.backgroundColor = colors[colorIndex];
        setTimeout(moveBlock, 1000)
    }
}
moveBlock()