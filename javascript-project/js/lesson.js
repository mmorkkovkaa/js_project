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

const converter = (element,target1, target2, isTrue)=>{
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type","application/json")
        request.send()
        request.onload = ()=>{
            const response = JSON.parse(request.response)
            if(isTrue){
                target1.value = (element.value / response.usd ).toFixed(2)
                target2.value = (element.value / response.ryeo_som ).toFixed(2)
            }else if(element === usd) {
                target1.value = (element.value * response.usd ).toFixed(2)
                target2.value = (element.value * response.ryeo_usd ).toFixed(2)
            }else {
                target1.value = (element.value * response.ryeo_usd).toFixed(2)
                target2.value = (element.value * response.ryeo_som).toFixed(2)
            }
            element.value === ''? target1.value = '' : null
            element.value === '' && (target1.value = '')
            element.value === ''? target2.value = '' : null
            element.value === '' && (target2.value = '')
        }

    }
}

converter(som, usd, ryeo,true)
converter(usd, som, ryeo)
converter(ryeo, usd, som)

//converter(som, usd, ryeo,true)
//converter(usd, som, ryeo)



// som.addEventListener('input', (event)=>{
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()
//
//     request.addEventListener('load', ()=>{
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd ).toFixed(2)
//
//     })
// })


