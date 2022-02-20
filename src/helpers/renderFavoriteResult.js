import createCard from '../views/createCard.js';
// Add fav movie from localStorage
const renderFavoriteResult = (favMovie) => {
  const resultList = document.getElementById('results');
  const card = createCard(favMovie);
  resultList.appendChild(card);
};
export default renderFavoriteResult;
