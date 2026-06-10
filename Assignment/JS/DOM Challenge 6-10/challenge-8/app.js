/**
 * Write your challenge solution here
 */
let items = ['T-Shirt', 'Jeans', 'Sneakers', 'Hat']
let itemsCount = [0, 0, 0, 0]
let itemsPrice = [0, 0, 0, 0]
let totalPrice = 0
let cartTotal = document.querySelector("#cart-total")
function addToCart(item, price) {
    // getting index of selected item and updating the count and price
    let indexOfItem = items.indexOf(item)
    itemsCount[indexOfItem]++
    itemsPrice[indexOfItem] = itemsPrice[indexOfItem] + price
    totalPrice = totalPrice + price
    
    let cartItems = document.querySelector("#cart-items")
    if (cartItems.classList.contains(item)) {
        // updating quantity
        cartItems.querySelector(`.${item}`).querySelector(".itemQuantity").textContent = itemsCount[indexOfItem]
        cartItems.querySelector(`.${item}`).querySelector(".itemTotalPrice").textContent = itemsPrice[indexOfItem]/100
        cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`
    }
    else {
        let newItem = document.createElement("div")
        let itemText = document.createElement("div")
        itemText.textContent = item

        let rightItemContent = document.createElement("div")
        let minusButton = document.createElement("button")
        minusButton.classList.add("subtractItem")
        minusButton.textContent = "-"
        let quantity = document.createElement("span")
        quantity.classList.add('itemQuantity')
        quantity.textContent = itemsCount[indexOfItem]
        let plusButton = document.createElement("button")
        plusButton.textContent = "+"
        let itemPrice = document.createElement("span")
        itemPrice.classList.add("itemTotalPrice")
        itemPrice.textContent = itemsPrice[indexOfItem]/100
        let removeButton = document.createElement("button")
        removeButton.textContent = "Remove"

        rightItemContent.appendChild(minusButton)
        rightItemContent.appendChild(quantity)
        rightItemContent.appendChild(plusButton)
        rightItemContent.appendChild(itemPrice)
        rightItemContent.appendChild(removeButton)
        rightItemContent.classList.add("rightItemContent")
        newItem.classList.add(item)

        newItem.appendChild(itemText)
        newItem.appendChild(rightItemContent)
        cartItems.appendChild(newItem)
        cartItems.classList.add(item)
        cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`

        minusButton.addEventListener("click", () => {
            console.log(itemsCount[indexOfItem])
            if (itemsCount[indexOfItem] > 1) {
                itemsCount[indexOfItem]--
                quantity.textContent = itemsCount[indexOfItem]
                itemsPrice[indexOfItem] = itemsPrice[indexOfItem] - price
                itemPrice.textContent = itemsPrice[indexOfItem] / 100
                totalPrice = totalPrice - price
                cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`
            }
            else if (itemsCount[indexOfItem] == 1) {
                cartItems.removeChild(newItem)
                cartItems.classList.remove(item)
                totalPrice = totalPrice - price
                cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`
            }
        })

        plusButton.addEventListener("click", () => {
            itemsCount[indexOfItem]++
            quantity.textContent = itemsCount[indexOfItem]
            itemsPrice[indexOfItem] = itemsPrice[indexOfItem] + price
            itemPrice.textContent = itemsPrice[indexOfItem]/100
            totalPrice = totalPrice + price
            cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`
        })

        removeButton.addEventListener("click", () => {
            cartItems.removeChild(newItem)
            cartItems.classList.remove(item)
            totalPrice = totalPrice - itemsPrice[indexOfItem]
            cartTotal.innerHTML = `<h3>Total: $${totalPrice/100}</h3>`
        })
    }
}