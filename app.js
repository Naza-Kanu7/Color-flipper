const colors = ["0", "green", "red", "blue", "orange", "purple", "brown", "yellow"];
const btn = document.getElementById('btn')
const body = document.querySelector('body')
const color = document.querySelector('.color')

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber()
    body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
