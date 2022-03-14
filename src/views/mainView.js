import createFooterView from './footerView.js';
import createHeaderView from './headerView.js';
import createLoadingIndicator from './loadingIndicator.js';
import createMovieCardView from './movieCardView.js';
import createPaginationView from './paginationView.js';
import createSearchBarView from './searchBarView.js';
import createWelcomeView from './welcomeView.js';

function createMainView(props) {
  const root = document.createElement('div');

  const headerView = createHeaderView();
  root.appendChild(headerView.root);

  const container = document.createElement('div');
  container.className = 'container';
  root.appendChild(container);

  const searchBar = createSearchBarView(props);
  container.appendChild(searchBar.root);

  const results = document.createElement('div');
  results.className = 'results';

  const welcomeView = createWelcomeView();
  results.appendChild(welcomeView.root);
  container.appendChild(results);

  const paginationView = createPaginationView(props);
  container.appendChild(paginationView.root);

  const footer = createFooterView();
  root.appendChild(footer.root);

  let loadingIndicator = null;

  const update = (state) => {
    console.log('main view update:', state);

    if (state.error) {
      console.log(state.error);
      return;
    }

    if (state.loading) {
      loadingIndicator = createLoadingIndicator().root;
      root.appendChild(loadingIndicator);
      return;
    }

    if (loadingIndicator) {
      root.removeChild(loadingIndicator);
      loadingIndicator = null;
    }

    results.innerHTML = '';
    window.scrollTo(0, 0);

    state.movies?.Search.forEach((movie) => {
      const cardView = createMovieCardView(movie);
      results.appendChild(cardView.root);
    });

    paginationView.update(state);
  };

  return { root, update };
}

export default createMainView;
