import getSearchQueries from '../handlers/getSearchQueries.js';
import createElement from '../helpers/createElement.js';

const createContainer = () => {
  const container = createElement('div', 'container', 'container');
  const searchBar = createElement('div', 'search-bar', 'search-bar');
  const searchInput = createElement('input', 'search-input');
  searchInput.setAttribute('placeholder', 'Search with title');
  const selectBoxCategory = createElement('select', 'search-by-category');
  const selectBoxDate = createElement('select', 'dateSelect');
  const searchButton = createElement('button', 'search-button');
  searchButton.textContent = 'Search';

  // Result UI Creation Steps
  const results = createElement('div', 'results', 'results');

  // Executing to UIS
  container.appendChild(searchBar);
  container.appendChild(results);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(selectBoxCategory);
  searchBar.appendChild(selectBoxDate);
  searchBar.appendChild(searchButton);
  searchButton.addEventListener('click', getSearchQueries);

  return container;
};
export default createContainer;
