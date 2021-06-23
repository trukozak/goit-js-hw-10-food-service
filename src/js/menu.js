import items from '../../menu.json';
import makeMarkup from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  bodyRef: document.querySelector('body'),
  menuRef: document.querySelector('.js-menu'),
  inputRef: document.querySelector('#theme-switch-toggle'),
};

refs.inputRef.addEventListener('change', onCheckBoxChange);

function onCheckBoxChange(e) {
  const themeName = e.target.checked ? Theme.DARK : Theme.LIGHT;
  const themeNameLight = e.target.checked ? Theme.Light : Theme.DARK;
  refs.bodyRef.classList.add(themeName);
  refs.bodyRef.classList.remove(themeNameLight);
  localStorage.setItem('Theme', themeName);
}
function initTheme() {
  const currentTheme = localStorage.getItem('Theme') || Theme.Light;
  refs.bodyRef.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) refs.inputRef.checked = true;
}
initTheme();

function makeMarkupMenu() {
  const markup = items.map(makeMarkup).join(' ');
  refs.menuRef.insertAdjacentHTML('beforeend', markup);
}
makeMarkupMenu();
