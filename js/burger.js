const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	humburgerElem.classList.toggle('humburger-menu-active');
}

menuElem.addEventListener('click', e => {
	const target = e.target;
	if(target.classList.contains('menu-list__link')) toggleMenu();
})

humburgerElem.addEventListener('click', toggleMenu);