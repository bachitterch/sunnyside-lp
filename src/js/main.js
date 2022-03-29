import '../scss/style.scss'
import logo from '../../public/images/logo.svg'
import arrowDown from '../../public/images/arrow-down.svg'
import transform from '../../public/images/image-transform.jpg'
import standOut from '../../public/images/image-stand-out.jpg'
import milkBottles from '../../public/images/image-gallery-milkbottles.jpg'
import orange from '../../public/images/image-gallery-orange.jpg'
import iceCreamCone from '../../public/images/image-gallery-cone.jpg'
import sugarCubes from '../../public/images/image-gallery-sugarcubes.jpg'

document.querySelector('.header__logo').src = transform
document.querySelector('.text__arrow-down').src = transform
document.querySelector('.transform__img').src = transform
document.querySelector('.stand_out__img').src = standOut
document.querySelector('#milk-bottles').src = milkBottles
document.querySelector('#orange').src = orange
document.querySelector('#ice-cream-cone').src = iceCreamCone
document.querySelector('#sugar-cubes').src = sugarCubes

const Nav = document.querySelector('.mobile__nav')
const NavToggle = document.querySelector('#navToggleBtn')
const NavClose = document.querySelectorAll('fadeUp')

NavToggle.addEventListener('click', () => {

  !Nav.classList.contains('open') ? Nav.classList.add('open') : Nav.classList.remove('open')

})
