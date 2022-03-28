import '../scss/style.scss'
import transform from '../../public/images/image-transform.jpg'
import standOut from '../../public/images/image-stand-out.jpg'
import milkBottles from '../../public/images/image-gallery-milkbottles.jpg'
import orange from '../../public/images/image-gallery-orange.jpg'
import iceCreamCone from '../../public/images/image-gallery-cone.jpg'
import sugarCubes from '../../public/images/image-gallery-sugarcubes.jpg'

document.querySelector('.transform__img').src = transform
document.querySelector('.stand_out__img').src = standOut
document.querySelector('#milk-bottles').src = milkBottles
document.querySelector('#orange').src = orange
document.querySelector('#ice-cream-cone').src = iceCreamCone
document.querySelector('#sugar-cubes').src = sugarCubes

const Nav = document.querySelector('.mobile.nav')
const NavToggle = document.querySelector('.header__nav_toggle')



NavToggle.addEventListener('click', () => {
  Nav.classList.toggle('open')
})
