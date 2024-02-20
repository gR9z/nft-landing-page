const navMenu = document.getElementById('nav')
const navToggle = document.getElementById('nav-toggle')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}
