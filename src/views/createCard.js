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
  const movieContent = createElement('p');
  movieContent.textContent = 'See More';
  card.appendChild(movieImg);
  card.appendChild(movieInformation);
  movieInformation.appendChild(movieTitle);
  movieInformation.appendChild(movieContent);
  card.addEventListener('click', async () => {
    const url = `https://www.omdbapi.com/?apikey=859c6fe2&i=${imdbID}&plot=full`;
    await getCardDetail(url);
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
