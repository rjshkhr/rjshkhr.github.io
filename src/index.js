import './styles/index.css';

import { scrollUp, scrollDown } from './modules/scroll';
import { toggleTheme, addBodyClass, addBtnClass } from './modules/toggleTheme';
import displayList from './modules/displayList';

const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
btnTheme.addEventListener('click', toggleTheme);

document.addEventListener('scroll', () => {
	scrollDown();
	scrollUp();
});

addBodyClass();
addBtnClass();
