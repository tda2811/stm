const red = document.getElementById('red')
const green = document.getElementById('green')
const black = document.getElementById('black')
const product = document.querySelector('.card-image img')
const title = document.querySelector('.card-title')

red.addEventListener('click', function (){
    product.style.filter = 'hue-rotate(-120deg) contrast(150%)'
    title.style.color = 'red'
    red.style.border = 'solid white 2px'
    green.style.border = 'none'
    black.style.border = 'none'
})

green.addEventListener('click', function (){
    product.style.filter = 'none'
    title.style.color = 'rgb(77, 175, 84)'
    green.style.border = 'solid white 2px'
    red.style.border = 'none'
    black.style.border = 'none'
})

black.addEventListener('click', function (){
    title.style.color = 'gray'
    product.style.filter = 'grayscale(100%) contrast(200%)'
    black.style.border = 'solid white 2px'
    red.style.border = 'none'
    green.style.border = 'none'
})


const year = parseInt(prompt("Enter the year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert(`${year} is a leap year.`);
} else {
  alert(`${year} is not a leap year.`);
}

