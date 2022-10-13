const foodData = [
    {
        name: "Pizza",
        price: 14,
        image: "./images/pizza.png",
        ingredients: "pepperoni, mushroom, mozzarella",
    },
    {
        name: "Hamburger",
        price: 12,
        image: "./images/burger.png",
        ingredients: "beef, cheese, lettuce",
    },
    {
        name: "Beer",
        price: 12,
        image: "./images/beer.png",
        ingredients: "grain, hops, yeast, water",
    }
]

const foodItems = document.getElementById("food-items")
const orderTotal = document.getElementById("order-total")
const modalForm = document.getElementById('modal-form')



foodData.forEach(function (item) {
    foodItems.innerHTML += `
    <div class="food-box">
    <img src="${item.image}">
    <div class="food-text">
      <h2>${item.name}</h2>
      <p class="ingredients">${item.ingredients}</p>
      <p>$${item.price}</p>
    </div>
    <div class="btn" data-item="${item.name}">+</div>
    </div>`
})

let orders = []

document.querySelectorAll(".btn").forEach(function (item) {
    item.addEventListener("click", function () {
        foodData.forEach(function (element) {
            if (element.name === item.dataset.item) {
                orders.push(element)
            }
        })
        renderOrder()
    })
})

function renderOrder() {
    let sum = 0
    orders.forEach(function (item) {
        sum += item.price
    })

    let ordersHtml = ""
    orders.forEach(function (item, index) {
        ordersHtml += `<div class="order-list">
        <h2>${item.name} <button class="remove-item" data-index="${index}">remove</button></h2>
          <h2 class="price">$${item.price}</h2>
       </div>`
    })

    orderTotal.innerHTML = `<h2 id="total-title">Your order</h2>
    <div id="orders">
    ${ordersHtml}
    </div>
    <div class="total-price">
      <h2>Total price:</h2>
      <h2 class="price" id="total-sum">$${sum}</h2>
    </div>
    <button id="complete-btn">Complete order</button>
    `

    document.querySelectorAll(".remove-item").forEach(function (item) {
        item.addEventListener("click", function () {
            orders = orders.filter(function (_, index) {
                return index != item.dataset.index
            })
            renderOrder()
        })
    })

    document.getElementById("complete-btn").addEventListener("click", function () {
        modal.style.display = "block"
    })



    document.getElementById("pay-btn").addEventListener("click", function () {
        const modalFormData = new FormData(modalForm)
        const name = modalFormData.get('name')
        modal.style.display = "none"
        orderTotal.innerHTML = `<p class="confirmation"> Thanks, ${name}! Your order is on its way! </p>`
    })


}

