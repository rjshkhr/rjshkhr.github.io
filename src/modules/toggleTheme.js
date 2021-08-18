const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');
const btnTheme = document.querySelector('.fa-moon');

const isDark = () => document.body.classList.contains('body-dark');

const toggleLight = () => {
	document.body.classList.remove('body-dark');
	btnTheme.classList.remove('fa-sun');
	document.body.classList.add('body-light');
	btnTheme.classList.add('fa-moon');
	localStorage.setItem('class-body-theme', 'body-light');
	localStorage.setItem('class-btn-theme', 'fa-moon');
};

const toggleDark = () => {
	document.body.classList.remove('body-light');
	btnTheme.classList.remove('fa-moon');
	document.body.classList.add('body-dark');
	btnTheme.classList.add('fa-sun');
	localStorage.setItem('class-body-theme', 'body-dark');
	localStorage.setItem('class-btn-theme', 'fa-sun');
};

const toggleTheme = () => isDark() ? toggleLight() : toggleDark();

const addBodyClass = () => document.body.classList.add(getBodyClass);
const addBtnClass = () => btnTheme.classList.add(getBtnClass);

export { toggleTheme, addBodyClass, addBtnClass };
