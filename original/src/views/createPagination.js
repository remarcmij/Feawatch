import createElement from '../helpers/createElement.js';
import getPaginationMovies from '../handlers/getPaginationMovies.js';

const createPagination = (url) => {
  const resultList = document.getElementById('results');
  const pagination = createElement('div', 'pagination');
  const next = createElement('p', 'next-movie');
  next.textContent = 'Next Page >>';
  const prev = createElement('p', 'prev-movie');
  prev.textContent = '<< Prev Page';

  pagination.appendChild(prev);
  pagination.appendChild(next);
  resultList.appendChild(pagination);

  let pageNumber;

  next.addEventListener('click', () => {
    const newUrl = url.split('page=');

    pageNumber = newUrl[1];
    pageNumber++;

    let nextPageUrl = `${newUrl[0]}page=${pageNumber}`;
    url = nextPageUrl;

    getPaginationMovies(url);
  });

  prev.addEventListener('click', () => {
    const newUrl = url.split('page=');

    pageNumber = newUrl[1];

    if (pageNumber > 1) {
      pageNumber--;
      let nextPageUrl = `${newUrl[0]}page=${pageNumber}`;
      url = nextPageUrl;
      getPaginationMovies(url);
    }
  });
};

export default createPagination;
