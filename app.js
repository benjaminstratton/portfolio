// Navigation Bar
window.addEventListener(`scroll`, function(){
    let header = document.querySelector(`header`)
    header.classList.toggle(`sticky`, window.scrollY > 0)
})
// Hamburger Nav Bar
function toggleMenu() {
    const menuToggle = document.querySelector(`.menuToggle`)
    const navigation = document.querySelector(`.navigation`)
    menuToggle.classList.toggle(`active`)
    navigation.classList.toggle(`active`)
}