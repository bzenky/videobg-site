const btnMenu = document.querySelector('.mobileMenu')
const links = document.querySelector('.links')

function toggleMenu() {
  btnMenu.classList.toggle('active')
  links.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu);
