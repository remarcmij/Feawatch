import { fetchData } from '../helpers/fetchData.js';
import { API_URL } from '../constants.js';
import createDate from '../helpers/createDate.js';

const getMovies = async (title, type = '', year = '') => {
  const url = `${API_URL}&s=${title}&type=${type}&y=${year}`;
  const { Search } = await fetchData(url);
  if (Search === undefined) {
    console.log('Movie can not find');
  } else {
    console.log(Search);
  }
};
createDate('dateSelect');
getMovies('la casa', '', '2005');
