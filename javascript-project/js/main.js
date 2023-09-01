// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

//json-photo-card

const button = document.querySelector('.btn_push');
const hokagesInfo = document.querySelector('.hokages');
let infoDisplayed = false;

button.addEventListener('click', async () => {
    if (infoDisplayed) {
        hokagesInfo.innerHTML = '';
        infoDisplayed = false;
        return;
    }

    try {
        const response = await fetch('data/peoples.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    const hokages = await response.json();

    hokages.forEach(person => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                <img src="${person.image}" alt="${person.name}">
                <h5>${person.name}</h5>
                <h6>Hokage's number: ${person.number}</h6>
                <span>Abilities: ${person.abilities}</span>
            `;
        hokagesInfo.append(div);

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'orange';
        })
        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = null;
        })
    })
        infoDisplayed = true;
    } catch (error) {
        console.error('Error:', error);
    }
})