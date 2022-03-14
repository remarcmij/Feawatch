import fetchMovies from '../fetchers/fetchMovies.js';
import createMainView from '../views/mainView.js';

function createMainPage() {
  const data = {};

  const getMovies = async () => {
    const { title, type, year, page } = data;

    data.error = null;
    data.loading = true;

    mainView.update(data);

    try {
      data.movies = await fetchMovies(title, type, year, page);
    } catch (err) {
      data.error = err;
    } finally {
      data.loading = false;
      mainView.update(data);
    }
  };

  //
  // Event handlers
  //
  const onInput = (e) => {
    data.title = e.target.value;
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
    data.type = e.target.value;
  };

  const onDateChange = (e) => {
    data.date = e.target.value;
    console.log('date', e.target.value);
  };

  // Create the main view and pass it the expected event handlers
  const mainView = createMainView({
    onInput,
    onKeypress,
    onSearchButton,
    onCategoryChange,
    onDateChange,
  });

  return mainView;
}

export default createMainPage;
