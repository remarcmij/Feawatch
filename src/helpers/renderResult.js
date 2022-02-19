import createCard from '../views/createCard.js';

const renderResult = (movieResults) => {
  const resultList = document.getElementById('results');
  resultList.innerHTML = '';
  movieResults.forEach((result) => {
    const card = createCard(result);
    resultList.appendChild(card);
  });
};
export default renderResult;
