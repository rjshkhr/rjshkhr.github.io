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

export default { scrollUp };
