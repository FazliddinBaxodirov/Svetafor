let elCardWrapper = document.querySelector(".wrapper")
let elCard1 = document.querySelector(".card1")
let elCard2 = document.querySelector(".card2")
let elCard3 = document.querySelector(".card3")
let elCart1 = document.querySelector(".cart1")
let elCart2 = document.querySelector(".cart2")

function ChangeColor(){
    setTimeout(() => {
        elCard1.classList.add("red")
        elCard2.classList.remove("yellow")
        elCard3.classList.remove("green")
        elCart2.classList.add("green")
        elCart1.classList.remove("red")
    },0)
    setTimeout(() => {
        elCard1.classList.remove("red")
        elCard2.classList.add("yellow")
        elCard3.classList.remove("green")
        elCart2.classList.remove("green")
    },4000)
    setTimeout(() => {
        elCard1.classList.remove("red")
        elCard2.classList.remove("yellow")
        elCard3.classList.add("green")
        elCart1.classList.add("red")
    },8000)
}
ChangeColor()

setInterval(() => {
    ChangeColor()
},12000)

