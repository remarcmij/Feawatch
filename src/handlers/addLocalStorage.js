const addStorage = (imdbID) => {
  let movies;
  if (localStorage.getItem('movies') == null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  if (movies.indexOf(imdbID) == -1) {
    movies.push(imdbID);
  }
  localStorage.setItem('movies', JSON.stringify(movies));
};
export default addStorage;
