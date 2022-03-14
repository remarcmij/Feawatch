import fetchMovies from '../fetchers/fetchMovies.js';
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
    } finally {
      state.loading = false;
      mainView.update(state);
    }
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

  // Create the main view and pass it the expected event handlers
  const mainView = createMainView({
    onInput,
    onKeypress,
    onSearchButton,
    onCategoryChange,
    onDateChange,
    onNext,
    onPrev,
  });

  return mainView;
}

export default createMainPage;
