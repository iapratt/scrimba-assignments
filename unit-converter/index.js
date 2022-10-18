/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const metersFeet = document.getElementById("meters-feet")
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")




inputBtn.addEventListener("click", function () {
    let inputNumber = []
    let feet = []
    let meters = []
    let gallons = []
    let liters = []
    let pounds = []
    let kilos = []


    inputNumber.push(inputEl.value)
    feet = inputNumber * 3.28084
    meters = inputNumber / 3.28084
    liters = inputNumber / 0.264172
    gallons = inputNumber * 0.264172
    pounds = inputNumber * 2.20462
    kilos = inputNumber / 2.20462

    metersFeet.innerHTML = `${inputNumber} meters = ${feet.toFixed(3)} feet | ${inputNumber} feet = ${meters.toFixed(3)} meters`
    litersGallons.innerHTML = `${inputNumber} liters = ${gallons.toFixed(3)} gallons | ${inputNumber} gallons = ${liters.toFixed(3)} liters`
    kilogramsPounds.innerHTML = `${inputNumber} kilos = ${pounds.toFixed(3)} pounds | ${inputNumber} pounds = ${kilos.toFixed(3)} kilos`
})






