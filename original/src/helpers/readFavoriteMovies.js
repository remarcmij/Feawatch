import { fetchData } from './fetchData.js';
import renderFavoriteResult from './renderFavoriteResult.js';
// Fetch Data from MAIN API with imdbID from localStorage
const readFavoriteMovies = async (url) => {
  try {
    const data = await fetchData(url);
    renderFavoriteResult(data);
  } catch (error) {
    console.log(error);
  }
};
export default readFavoriteMovies;
