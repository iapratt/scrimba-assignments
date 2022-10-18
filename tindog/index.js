import dogs from "./data.js";
import Dog from "./dog.js";

const nope = document.getElementById("nope")
const like = document.getElementById("like")
const card = document.getElementById("card")

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

function render() {
    card.innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    if (currentDogIndex === dogs.length - 1) {
        setTimeout(() => {
            nope.style.backgroundColor = 'white'
            like.style.backgroundColor = 'white'
            card.innerHTML = `<h3 class="endcard">There are no more dogs in your area</h3>`
        }, 1000)
    } else {
        setTimeout(() => {
            currentDogIndex++
            currentDog = new Dog(dogs[currentDogIndex])
            render()
            nope.style.backgroundColor = 'white'
            like.style.backgroundColor = 'white'
        }, 1000)
    }

}

function yes() {
    currentDog.setMatchStatus(true)
    getNewDog()
}

function no() {
    currentDog.setMatchStatus(false)
    getNewDog()
}

function likeBadge() {
    card.innerHTML += `
    <div class="badge-div">
    <img class="badge" src="./images/badge-like.png">
    </div>`
}

function nopeBadge() {
    card.innerHTML += `
    <div class="badge-div">
    <img class="badge" src="./images/badge-nope.png">
    </div>`
}

render()

like.addEventListener('click', yes)
nope.addEventListener('click', no)

nope.addEventListener('click', function onClick(event) {
    nope.style.backgroundColor = '#FFE7EF'
    nopeBadge()
})
like.addEventListener('click', function onClick(event) {
    like.style.backgroundColor = '#DBFFF4'
    likeBadge()
})