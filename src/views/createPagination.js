import createElement from '../helpers/createElement.js';

const createPagination = (url) => {
  const resultList = document.getElementById('results');
  const pagination = createElement('div', 'pagination');
  const next = createElement('p', 'next-movie');
  next.textContent = 'Next Page >>';
  const prev = createElement('p', 'prev-movie');
  prev.textContent = '<< Prev Page';
  pagination.appendChild(next);
  pagination.appendChild(prev);
  resultList.appendChild(pagination);
  let pageNumber;
  next.addEventListener('click', () => {
    const newUrl = url.split('page=');
    pageNumber = newUrl[1];
    pageNumber++;
    let nextPageUrl = `${newUrl[0]}page=${pageNumber}`;
    console.log(nextPageUrl);
    url = nextPageUrl;
  });
};
export default createPagination;
