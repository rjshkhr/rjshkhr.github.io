const btnHamburger = document.querySelector('.fa-bars');

const displayList = () => {
	const navUl = document.querySelector('nav ul');
	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars');
		btnHamburger.classList.add('fa-times');
		navUl.style.width = '100%';
	} else {
		btnHamburger.classList.remove('fa-times');
		btnHamburger.classList.add('fa-bars');
		navUl.style.width = '0';
	}
};

export default displayList;
