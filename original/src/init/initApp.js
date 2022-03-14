import readLocalStorage from '../utils/readLocalStorage.js';
import createWelcomePage from '../views/createWelcomePage.js';
import createUi from './createUi.js';

createUi();

const localStorage = readLocalStorage();

if (localStorage.length == 0) {
  const resultPage = document.getElementById('results');
  resultPage.appendChild(createWelcomePage());
}
