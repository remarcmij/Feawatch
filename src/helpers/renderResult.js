import createCard from '../views/createCard.js';
// Take cards from search results and add them in results div
const renderResult = (movieResults) => {
  const resultList = document.getElementById('results');
  resultList.innerHTML = '';
  movieResults.forEach((result) => {
    const card = createCard(result);
    resultList.appendChild(card);
  });
};
export default renderResult;
