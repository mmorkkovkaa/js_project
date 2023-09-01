/// phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () =>{
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = 'red'
    }
}

//TAB SLIDE
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = ()=>{
    tabContent.forEach((item)=>{
        item.style.display='none'
    })
    tabs.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}

const show =(index = 0)=>{
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

let nextTab = 0
const autoShow =()=>{
    hideTabContent()
    show(nextTab)
    nextTab = (nextTab + 1)% tabContent.length
}

let interval = setInterval(autoShow, 3000)

tabsParent.addEventListener('mouseenter', ()=>{
    clearInterval(interval)
})

tabsParent.addEventListener('mouseleave', ()=>{
    interval = setInterval(autoShow, 3000)
})


hideTabContent()
show()

tabsParent.onclick =(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i)=>{
            if(item === event.target){
                hideTabContent()
                show(i)
                nextTab = i
                clearInterval(interval)
                interval = setInterval(autoShow, 3000)

            }
        })
    }
}

//CONVERTER
const ryeo =document.querySelector('#ryeo')
const som =document.querySelector('#som')
const usd =document.querySelector('#usd')
//

const fetchData = async () => {
    try {
        const response = await fetch('../data/converter.json')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error)
        return null
    }
}
const converter = async (element, target1, target2, isTrue) => {
    element.addEventListener('input', async () => {
        const data = await fetchData()
        if (!data) return

        if (isTrue) {
            target1.value = (element.value / data.usd).toFixed(2)
            target2.value = (element.value / data.ryeo_som).toFixed(2)
        } else if (element === usd) {
            target1.value = (element.value * data.usd).toFixed(2)
            target2.value = (element.value * data.ryeo_usd).toFixed(2)
        } else {
            target1.value = (element.value * data.ryeo_usd).toFixed(2)
            target2.value = (element.value * data.ryeo_som).toFixed(2)
        }

        if (element.value === '') {
            target1.value = ''
            target2.value = ''
        }
    })
}

converter(som, usd, ryeo, true)
converter(usd, som, ryeo)
converter(ryeo, usd, som)

//CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1

const infoCard = async ()=>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
    const data = await response.json();
    card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `} catch (error) {
        console.error('Error:', error)
    }
}

infoCard()

btnNext.onclick = ()=>{
    if( count <= 199){
        count++
    }else {
        count = 1
    }
    infoCard()
}

btnPrev.onclick = ()=>{
    if (count > 1) {
        count--
    } else {
        count = 200
    }
    infoCard()
}



//weather
const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const apiKey = 'e417df62e04d3b1b111abeab19cea714'


const citySearch = () => {
    cityName.addEventListener('input', async (event) => {
        try {
            const cityNameValue = event.target.value;
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            city.innerHTML = data.name;
            temp.innerHTML = `${Math.round(data.main.temp - 273)}&deg;C`
        } catch (error) {
            console.error('Error:', error)

            city.innerHTML = 'City not found...'
            temp.innerHTML = 'enter data correctly!'
        }
    })
}

citySearch()











