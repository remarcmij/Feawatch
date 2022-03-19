import fetchMovieDetails from '../fetchers/fetchMovieDetails.js';
import router from '../lib/router.js';
import log from '../lib/logger.js';
import createDetailView from '../views/detailView.js';

function createDetailPage(imdbID) {
  const detailView = createDetailView();

  const getData = async () => {
    router.updateState({ error: null, loading: true, movie: null });

    let movie;

    try {
      movie = await fetchMovieDetails(imdbID);
    } catch (error) {
      router.updateState({ error, loading: false });
      log.error('detailPage', error.message);
      router.navigateTo('error');
      return;
    }

    router.updateState({ movie, loading: false });
  };

  getData();

  return detailView;
}

export default createDetailPage;
