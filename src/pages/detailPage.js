import fetchMovieDetails from '../fetchers/fetchMovieDetails.js';
import router from '../lib/router.js';
import log from '../lib/logger.js';
import createDetailView from '../views/detailView.js';

function createDetailPage(imdbID) {
  const props = {
    onBackClick() {
      router.navigateTo('home');
    },
  };
  const detailView = createDetailView(props);

  const getData = async () => {
    router.updateState({ error: null, loading: true, movie: null });

    try {
      const movie = await fetchMovieDetails(imdbID);
      router.updateState({ movie, loading: false });
    } catch (error) {
      router.updateState({ error, loading: false });
      log.error('detailPage', error.message);
      router.navigateTo('error');
      return;
    }
  };

  getData();

  return detailView;
}

export default createDetailPage;
