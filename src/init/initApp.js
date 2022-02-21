import readLocalStorage from '../utils/readLocalStorage.js';
import createWelcomePage from '../views/createWelcomePage.js';
import createUi from './createUi.js';

createUi();
// getMovies('rain');
const localStorage = readLocalStorage();
console.log(localStorage.length);
if (localStorage.length == 0) {
  const resultPage = document.getElementById('results');

  resultPage.appendChild(createWelcomePage());
  console.log('no local');
}
