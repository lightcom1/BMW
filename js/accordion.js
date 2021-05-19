const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

featureLinkElems.forEach((elem, index) => {
	elem.addEventListener('click', () => {
		if(elem.classList.contains('feature__link_active')) {
			featureSubElems[index].classList.add('hidden');
			elem.classList.remove('feature__link_active');
		} else {
			featureLinkElems.forEach(elem => {
				elem.classList.remove('feature__link_active');
			});
			featureSubElems.forEach(elem => {
				elem.classList.add('hidden');
			});
			featureSubElems[index].classList.remove('hidden');
			elem.classList.add('feature__link_active');
		}
	})
})