const btnHamburger = document.querySelector('.fa-bars');

const displayList = () => {
	const navUl = document.querySelector('nav ul');

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars');
		btnHamburger.classList.add('fa-times');
		navUl.classList.add('display-nav-list');
	} else {
		btnHamburger.classList.remove('fa-times');
		btnHamburger.classList.add('fa-bars');
		navUl.classList.remove('display-nav-list');
	}
};

export default displayList;
