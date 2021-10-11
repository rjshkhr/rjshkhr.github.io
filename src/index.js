import './styles/index.css';
import scroll from './modules/scroll';
import { toggleTheme, addThemeClass } from './modules/toggleTheme';
import displayList from './modules/displayList';

const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', scroll.scrollUp);

const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');

addThemeClass(getBodyClass, getBtnClass);
