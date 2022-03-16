import fetchMovies from '../fetchers/fetchMovies.js';
import { navigateTo } from '../lib/hashRouter.js';
import log from '../lib/logger.js';
import createMainView from '../views/mainView.js';

function createMainPage(state) {
  const getMovies = async () => {
    const { title, type, year, page } = state;

    state.error = null;
    state.loading = true;
    mainView.update(state);

    try {
      state.movies = await fetchMovies(title, type, year, page);
    } catch (err) {
      state.error = err;
      log.error('detailPage', err.message);
      navigateTo('error');
      return;
    }

    state.loading = false;
    mainView.update(state);
  };

  //
  // Event handlers
  //
  const onInput = (e) => {
    state.title = e.target.value;
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      getMovies();
    }
  };

  const onSearchButton = () => {
    getMovies();
  };

  const onCategoryChange = (e) => {
    state.type = e.target.value;
  };

  const onDateChange = (e) => {
    state.date = e.target.value;
    console.log('date', e.target.value);
  };

  const onNext = () => {
    state.page += 1;
    getMovies();
  };

  const onPrev = () => {
    state.page -= 1;
    getMovies();
  };

  const onSeeMore = (movie) => {
    navigateTo('detail', movie.imdbID);
  };

  // Create the main view and pass it the expected event handlers
  const mainView = createMainView({
    onInput,
    onKeypress,
    onSearchButton,
    onCategoryChange,
    onDateChange,
    onNext,
    onPrev,
    onSeeMore,
  });

  if (state.title) {
    getMovies();
  }

  return mainView;
}

export default createMainPage;
