const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');
const btnTheme = document.querySelector('.fa-moon');

const isDark = () => document.body.classList.contains('body-dark');

const setTheme = (bodyClass, buttonClass) => {
	document.body.classList.remove(localStorage.getItem('class-body-theme'));
	btnTheme.classList.remove(localStorage.getItem('class-btn-theme'));
	document.body.classList.add(bodyClass);
	btnTheme.classList.add(buttonClass);
	localStorage.setItem('class-body-theme', bodyClass);
	localStorage.setItem('class-btn-theme', buttonClass);
}

const toggleTheme = () => (
  isDark()
  ? setTheme('body-light', 'fa-moon')
  : setTheme('body-dark', 'fa-sun')
);

const addBodyClass = () => document.body.classList.add(getBodyClass);
const addBtnClass = () => btnTheme.classList.add(getBtnClass);

export { toggleTheme, addBodyClass, addBtnClass };
