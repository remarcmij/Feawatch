import { API_URL } from '../constants.js';
import fetchData from '../lib/fetchData.js';

function fetchMovies(title = '', type = '', year = '', page = '1') {
  let url = `${API_URL}&s=${title}&page=${page}`;
  if (type) {
    url += `&type=${type}`;
  }
  if (year) {
    url += `&year=${year}`;
  }
  return fetchData(url, { cache: true });
}

export default fetchMovies;
