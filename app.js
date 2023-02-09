// Navigation Bar
window.addEventListener(`scroll`, function(){
    let header = document.querySelector(`header`)
    header.classList.toggle(`sticky`, window.scrollY > 0)
})
// Hamburger
const hamburger = document.querySelector(`.hamburger`)
const navMenu = document.querySelector(`.nav-bar`)
hamburger.addEventListener(`click`, function(){
    hamburger.classList.toggle(`active`)
    navMenu.classList.toggle(`active`)
})
document.querySelectorAll(`.nav-link`).forEach(n => n.addEventListener(`click`, function(){
    hamburger.classList.remove(`active`)
    navMenu.classList.remove(`active`)
}))