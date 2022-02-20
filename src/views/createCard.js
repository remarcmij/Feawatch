import addStorage from '../handlers/addLocalStorage.js';
import deleteStorage from '../handlers/removeLocalStorage.js';
import createElement from '../helpers/createElement.js';
import { fetchData } from '../helpers/fetchData.js';
import createCardDetail from './createCardDetail.js';

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
  seeMore.textContent = 'See More';
  const favorite = createElement('p', 'favorite-movie');
  favorite.innerHTML = `<i id="fav-movie" class="fa-solid fa-2x fa-heart-crack"></i>`;
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
      isFavorited = false;
    } else {
      isFavorited = true;
      console.log('Favorited');
      addStorage(imdbID);
    }
  });
  return card;
};

const getCardDetail = async (url) => {
  try {
    const data = await fetchData(url);
    renderResult(data);
  } catch (error) {
    console.log(error);
  }
};
const renderResult = (data) => {
  const resultList = document.getElementById('results');
  resultList.innerHTML = '';
  const detailCard = createCardDetail(data);
  resultList.appendChild(detailCard);
};

export default createCard;
