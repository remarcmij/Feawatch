import { fetchData } from '../helpers/fetchData.js';
import { API_URL } from '../constants.js';

import createUi from './createUi.js';
import createCard from '../views/createCard.js';
createUi();
const getMovies = async (title = '', type = '', year = '') => {
  try {
    const url = `${API_URL}&s=${title}&type=${type}&y=${year}`;
    const { Search } = await fetchData(url);
    if (Search === undefined) {
      console.log('Movie can not find');
      const resultList = document.getElementById('results');
      resultList.innerHTML =
        'Searched Movie Can not Found or There is no Search Yet';
      resultList.style.color = 'red';
    } else {
      renderResult(Search);
    }
  } catch (error) {
    console.log(error);
  }
};

//Show Movie

//Render Results
const renderResult = (movieResults) => {
  const resultList = document.getElementById('results');
  resultList.innerHTML = '';
  movieResults.forEach((result) => {
    const card = createCard(result);
    resultList.appendChild(card);
  });
};

let searchTimeToken = 0;
window.onload = () => {
  const searchElement = document.getElementById('search-input');
  // Will add here other search filter and change event listener instead of onkeyup to click for search button;
  searchElement.onkeyup = (e) => {
    clearTimeout(searchTimeToken);
    if (searchElement.value.trim().length === 0) {
      return;
    }
    searchTimeToken = setTimeout(() => {
      getMovies(searchElement.value);
    }, 500);
  };
};

getMovies();
