const btnHamburger = document.querySelector('.fa-bars');

const displayList = () => {
	const navUl = document.querySelector('nav ul');
	navUl.classList.toggle('display-nav');
	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars');
		btnHamburger.classList.add('fa-times');
	} else {
		btnHamburger.classList.remove('fa-times');
		btnHamburger.classList.add('fa-bars');
	}
};

export default displayList;
