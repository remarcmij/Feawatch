import closePopUp from '../helpers/closePopUp.js';
import createElement from '../helpers/createElement.js';

const createCardDetail = (data, resultList) => {
  const {
    Title,
    Year,
    Runtime,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Poster,
    imdbRating,
  } = data;

  const cardDetailContainer = createElement('div', 'card-detail-container');
  const cardDetailImg = createElement('img', 'card-detail-img');
  const cardDetailContentWrapper = createElement(
    'div',
    'card-detail-content-wrapper',
  );

  //Create UI
  const cardDetailTitle = createElement('h1', 'card-detail-title');
  const cardDetailYear = createElement('p', 'card-detail-year');
  const cardDetailDescription = createElement('p', 'card-detail-description');
  const cardDetailRunTime = createElement('p', 'card-detail-run-time');
  const cardDetailLanguage = createElement('p', 'card-detail-language');
  const cardDetailRating = createElement('p', 'card-detail-imdb-rating');
  const cardDetailDirector = createElement('p', 'card-detail-director');
  const cardDetailWriter = createElement('p', 'card-detail-writer');
  const cardDetailActors = createElement('p', 'card-detail-actors');
  const crossIcon = createElement('i', '', 'fa-solid fa-2x fa-xmark');
  //Execute UI
  cardDetailContainer.appendChild(cardDetailImg);
  cardDetailContainer.appendChild(cardDetailContentWrapper);
  cardDetailContentWrapper.appendChild(crossIcon);
  cardDetailContentWrapper.appendChild(cardDetailTitle);
  cardDetailContentWrapper.appendChild(cardDetailYear);
  cardDetailContentWrapper.appendChild(cardDetailLanguage);
  cardDetailContentWrapper.appendChild(cardDetailRunTime);
  cardDetailContentWrapper.appendChild(cardDetailRating);
  cardDetailContentWrapper.appendChild(cardDetailDirector);
  cardDetailContentWrapper.appendChild(cardDetailWriter);
  cardDetailContentWrapper.appendChild(cardDetailActors);
  cardDetailContentWrapper.appendChild(cardDetailDescription);

  //Add contents to UIS

  if (Poster === 'N/A') {
    cardDetailImg.src = '../../public/img/default-card-img.jpg';
  } else {
    cardDetailImg.src = Poster;
  }

  cardDetailImg.setAttribute('alt', Title);
  cardDetailTitle.textContent = `Movie Title :${Title}`;
  cardDetailYear.textContent = `Created : ${Year}`;
  cardDetailLanguage.textContent = `Language : ${Language}`;
  cardDetailRunTime.textContent = `Duration : ${Runtime}`;
  cardDetailRating.textContent = `Imdb Rating : ${imdbRating}`;
  cardDetailDirector.textContent = `Director : ${Director}`;
  cardDetailWriter.textContent = `Writer : ${Writer}`;
  cardDetailActors.textContent = `Actors : ${Actors}`;
  cardDetailDescription.textContent = `Description : ${Plot}`;

  crossIcon.addEventListener('click', () => {
    closePopUp(resultList, cardDetailContainer);
  });

  return cardDetailContainer;
};
export default createCardDetail;
