import createElement from '../helpers/createElement.js';
const createCard = (movie) => {
  const { Poster, Title, Type, Year, imdbID } = movie;
  const card = createElement('div', 'movie-card', 'movie-card');
  const movieImg = createElement('img', 'movie-img', 'movie-img');
  console.log(Poster);
  if (Poster === 'N/A') {
    movieImg.src = './public/img/default-card-img.jpg';
  } else {
    movieImg.src = Poster;
  }
  movieImg.setAttribute('alt', Title);
  const movieInformation = createElement(
    'div',
    'movie-information',
    'movie-information',
  );
  const movieTitle = createElement('h1');
  movieTitle.textContent = Title;
  const movieContent = createElement('p');
  movieContent.textContent = 'See More';
  card.appendChild(movieImg);
  card.appendChild(movieInformation);
  movieInformation.appendChild(movieTitle);
  movieInformation.appendChild(movieContent);
  card.addEventListener('click', () => console.log(imdbID));
  return card;
};
export default createCard;
