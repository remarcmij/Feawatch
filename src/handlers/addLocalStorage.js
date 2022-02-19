const addStorage = (imdbID) => {
  let movies;
  if (localStorage.getItem('movies') == null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  movies.push(imdbID);
  localStorage.setItem('movies', JSON.stringify(movies));
};
export default addStorage;
