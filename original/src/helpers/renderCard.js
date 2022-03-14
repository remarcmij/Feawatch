import createCardDetail from '../views/createCardDetail.js';

const renderCard = (data) => {
  const resultList = document.getElementById('results');
  // resultList.innerHTML = '';
  const detailCard = createCardDetail(data, resultList);
  resultList.appendChild(detailCard);
};
export default renderCard;
