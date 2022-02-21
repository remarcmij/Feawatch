import addStorage from '../utils/addLocalStorage.js';
import deleteStorage from '../utils/removeLocalStorage.js';
import createElement from '../helpers/createElement.js';
import getCardDetail from '../handlers/getCardDetail.js';
import createPopUp from './createPopUp.js';

const createCard = (movie) => {
  const { Poster, Title, imdbID } = movie;
  const card = createElement('div', 'movie-card', 'movie-card');
  const movieImg = createElement('img', 'movie-img', 'movie-img');

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
  const seeMore = createElement('p', 'see-more');
  seeMore.textContent = 'See Detail';
  const favorite = createElement('p', 'favorite-movie');
  favorite.innerHTML = `<i id="fav-movie" class="fa-solid fa-2x fa-heart"></i>`;
  const toolTipText = createElement('p', 'tooltip');
  toolTipText.textContent = 'Add Favorite';

  favorite.appendChild(toolTipText);

  card.appendChild(movieImg);
  card.appendChild(movieInformation);

  movieInformation.appendChild(movieTitle);
  movieInformation.appendChild(favorite);
  movieInformation.appendChild(seeMore);

  seeMore.addEventListener('click', async () => {
    const url = `https://www.omdbapi.com/?apikey=859c6fe2&i=${imdbID}&plot=full`;
    await getCardDetail(url);
  });

  let isFavorited = false;

  favorite.addEventListener('click', () => {
    if (isFavorited) {
      deleteStorage(imdbID);
      favorite.appendChild(
        createPopUp(favorite, 'Video Removed from Favorites'),
      );
      isFavorited = false;
    } else {
      isFavorited = true;
      console.log('Favorited');
      favorite.appendChild(createPopUp(favorite, 'Movie Favorited'));
      addStorage(imdbID);
    }
  });
  return card;
};

export default createCard;
