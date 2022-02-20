import { fetchData } from '../helpers/fetchData.js';
import renderResult from '../helpers/renderResult.js';
import createPagination from '../views/createPagination.js';

const getPaginationMovies = async (url) => {
  try {
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
export default getPaginationMovies;
