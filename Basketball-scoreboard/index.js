

let countGuest = document.getElementById("count-guest")

let guestCount = 0

let countHome = document.getElementById("count-el")

let count = 0

function add1guest() {
    guestCount += 1
    countGuest.textContent = guestCount
}

function add2guest() {
    guestCount += 2
    countGuest.textContent = guestCount
}

function add3guest() {
    guestCount += 3
    countGuest.textContent = guestCount
}

function add1home() {
    count += 1
    countHome.textContent = count
}

function add2home() {
    count += 2
    countHome.textContent = count
}

function add3home() {
    count += 3
    countHome.textContent = count
}