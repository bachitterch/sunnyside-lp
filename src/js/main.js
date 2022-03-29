import '../scss/style.scss'
import './staticImports'

const Nav = document.querySelector('.mobile__nav')
const NavToggle = document.querySelector('#navToggleBtn')

NavToggle.addEventListener('click', () => {

  !Nav.classList.contains('open') ? Nav.classList.add('open') : Nav.classList.remove('open')

})
