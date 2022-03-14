import getMovies from '../helpers/getMovies.js';

const getSearchQueries = () => {
  const searchElement = document.getElementById('search-input');
  const searchValue = searchElement.value;
  const searchCategoryElement = document.getElementById('search-by-category');
  const searchCategoryValue = searchCategoryElement.value;
  const searchYearElement = document.getElementById('dateSelect');
  const searchYearValue = searchYearElement.value;
  getMovies(searchValue, searchCategoryValue, searchYearValue);
};
export default getSearchQueries;
