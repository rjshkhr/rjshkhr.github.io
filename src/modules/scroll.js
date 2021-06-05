const scrollDown = () => {
	const btnScrollDown = document.querySelector('.scroll-down');
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		btnScrollDown.style.display = 'none';
	} else {
		btnScrollDown.style.display = 'block';
	}
};

const scrollUp = () => {
	const btnScrollUp = document.querySelector('.scroll-up');
	if (
		document.body.scrollTop > 300 ||
		document.documentElement.scrollTop > 300
	) {
		btnScrollUp.style.display = 'block';
	} else {
		btnScrollUp.style.display = 'none';
	}
};

export { scrollUp, scrollDown };
