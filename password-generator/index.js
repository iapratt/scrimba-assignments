const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// 91 characters

// 15 random characters per each password


let passElOne = document.getElementById("pass-one")
let passElTwo = document.getElementById("pass-two")


function passwordGenerator() {
    let passwordOne = []
    let passwordTwo = []

    for (let i = 0; i <= 15; i++) {
        passwordOne += characters[Math.floor(Math.random() * 91)]
        passwordTwo += characters[Math.floor(Math.random() * 91)]
    }

    passElOne.textContent = passwordOne
    passElTwo.textContent = passwordTwo
}

