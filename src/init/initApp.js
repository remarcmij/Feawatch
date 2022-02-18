import { fetchData } from '../helpers/fetchData.js';
import { API_URL } from '../constants.js';

import createUi from './createUi.js';
import createCard from '../views/createCard.js';
import createElement from '../helpers/createElement.js';
import createPagination from '../views/createPagination.js';
createUi();
const getMovies = async (title = '', type = '', year = '', page = '1') => {
  try {
    const url = `${API_URL}&s=${title}&type=${type}&y=${year}&page=${page}`;
    const { Search } = await fetchData(url);
    if (Search === undefined) {
      console.log('Movie can not find');
      const resultList = document.getElementById('results');
      resultList.innerHTML =
        'Searched Movie Can not Found or There is no Search Yet';
      resultList.style.color = 'red';
    } else {
      renderResult(Search);
      createPagination(url);
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

// window.onload = () => {

// Will add here other search filter and change event listener instead of onkeyup to click for search button;
// const getSearchQuery = () => {
//   if (searchElement.value.trim().length === 0) {
//     return;
//   }
//   console.log(searchElement.value);
//   return searchElement.value;
// };
//   // searchElement.addEventListener('keyup', getSearchQuery);
// };
const searchButton = document.getElementById('search-button');

const getSearchQueries = () => {
  const searchElement = document.getElementById('search-input');
  const searchValue = searchElement.value;
  const searchCategoryElement = document.getElementById('search-by-category');
  const searchCategoryValue = searchCategoryElement.value;
  const searchYearElement = document.getElementById('dateSelect');
  const searchYearValue = searchYearElement.value;
  console.log(searchValue, searchYearValue, searchCategoryValue);
  getMovies(searchValue, searchCategoryValue, searchYearValue);
};
searchButton.addEventListener('click', getSearchQueries);

getMovies();
