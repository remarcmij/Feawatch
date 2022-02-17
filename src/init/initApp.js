import { fetchData } from '../helpers/fetchData.js';
import { API_URL_TV_MAZE } from '../constants.js';
import createDate from '../helpers/createDate.js';

const getMovies = async (category = 'Action', isFiltered = false) => {
  const movies = await fetchData(API_URL_TV_MAZE);
  if (isFiltered) {
    const filtered = movies.filter((movie) => movie.genres.includes(category));
    console.log(filtered);
  } else {
    console.log(movies);
  }
};
createDate('dateSelect');
getMovies('Drama');
