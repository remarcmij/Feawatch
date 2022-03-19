import fetchMovies from '../fetchers/fetchMovies.js';
import router from '../lib/router.js';
import log from '../lib/logger.js';
import createMainView from '../views/mainView.js';

function createMainPage() {
  const getMovies = async () => {
    const { title, type, year, page } = router.getState();

    router.updateState({ error: null, loading: true });

    let movies;

    try {
      movies = await fetchMovies(title, type, year, page);
    } catch (error) {
      router.updateState({ error, loading: false });
      log.error('detailPage', error.message);
      router.navigateTo('error');
      return;
    }

    router.updateState({ movies, loading: false });
  };

  //
  // Event handlers
  //
  const onInput = (e) => {
    router.updateState({ title: e.target.value });
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
    router.updateState({ type: e.target.value });
  };

  const onDateChange = (e) => {
    router.updateState({ date: e.target.value });
  };

  const onNext = () => {
    let { page } = router.getState();
    page += 1;
    router.updateState({ page });
    getMovies();
  };

  const onPrev = () => {
    let { page } = router.getState();
    page -= 1;
    router.updateState({ page });
    getMovies();
  };

  const onSeeMore = (movie) => {
    router.navigateTo('detail', movie.imdbID);
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

  if (router.getState().title) {
    getMovies();
  }

  return mainView;
}

export default createMainPage;
