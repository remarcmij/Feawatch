import createElement from '../helpers/createElement.js';
import createCard from './createCard.js';

const createContainer = () => {
  const container = createElement('div', 'container', 'container');
  const searchBar = createElement('div', 'search-bar', 'search-bar');
  const searchInput = createElement('input', 'search-input');
  searchInput.setAttribute('placeholder', 'Search with title');
  const selectBoxCategory = createElement('select', 'search-by-category');
  // options Array will be added
  const selectBoxDate = createElement('select', 'dateSelect');
  const searchButton = createElement('button', 'search-button');
  searchButton.textContent = 'Search';

  // Result UI Creation Steps

  const results = createElement('div', 'results', 'results');

  // Card Component
  // const card = createCard();

  // Executing to UIS
  container.appendChild(searchBar);
  container.appendChild(results);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(selectBoxCategory);
  searchBar.appendChild(selectBoxDate);
  searchBar.appendChild(searchButton);
  // results.appendChild(card);

  return container;
};
export default createContainer;
