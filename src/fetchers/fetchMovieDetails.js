import { API_URL } from '../constants.js';
import fetchData from '../lib/fetchData.js';

function fetchMovieDetails(imdbID) {
  const url = `${API_URL}&i=${imdbID}&plot=full`;
  return fetchData(url, { cache: true });
}

export default fetchMovieDetails;
