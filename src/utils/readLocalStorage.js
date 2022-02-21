import readFavoriteMovies from '../helpers/readFavoriteMovies.js';

const readLocalStorage = () => {
  let movies;
  if (localStorage.getItem('movies') == null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  movies.forEach((movie) => {
    const url = `https://www.omdbapi.com/?apikey=859c6fe2&i=${movie}&plot=full`;
    console.log(url);
    readFavoriteMovies(url);
  });
  return movies;
};
export default readLocalStorage;
