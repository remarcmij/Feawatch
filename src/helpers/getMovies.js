import createPagination from '../views/createPagination.js';
import { API_URL } from '../constants.js';
import { fetchData } from './fetchData.js';
import renderResult from './renderResult.js';

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
export default getMovies;
