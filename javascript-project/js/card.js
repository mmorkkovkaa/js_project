const cardContainer = document.getElementById('card-container')
const uchihaCards =  async ()=> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()

        data.forEach(item => {
            const card = document.createElement('div')
            card.classList.add('cards')

            card.innerHTML = `
                <img src="https://staticdelivery.nexusmods.com/mods/110/images/thumbnails/51136-1-1392491702.jpg" alt="Card Image">
                <h5>${item.title}</h5>
                <p>${item.body}</p>
            `

            cardContainer.appendChild(card)
        })
    } catch (error) {
        console.error('Error:', error)
    }
}

uchihaCards()