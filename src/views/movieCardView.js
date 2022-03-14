function createMovieCardView(props) {
  const { Poster, Title } = props;

  const root = document.createElement('div');
  root.className = 'movie-card';
  root.innerHTML = String.raw`
    <img class="movie-img" src="${Poster}" alt="${Title}">
    <div class="movie-information">
      <h1>${Title}</h1>
      <p id="favorite-movie">
        <i id="fav-movie" class="fa-solid fa-2x fa-heart"></i>
        <p id="tooltip">Add Favorite</p></p><p id="see-more">See Detail</p>
    </div>  
  `;

  return { root };
}

export default createMovieCardView;
