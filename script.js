let isIgnite = false

function changeCard(event) {

const card = event.currentTarget

const bg = isIgnite ?"explorer2" :"ignite3"
isIgnite = !isIgnite 

card.style.backgroundImage = `url(./assets/bg-${bg}.svg) `

}