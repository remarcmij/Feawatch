const deleteStorage = (imdbID) => {
  let movies;
  if (localStorage.getItem('movies') == null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  let movieIndex = movies.indexOf(imdbID);
  movies.splice(movieIndex, 1);
  localStorage.setItem('movies', JSON.stringify(movies));
};
export default deleteStorage;
