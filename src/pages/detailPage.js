import fetchMovieDetails from '../fetchers/fetchMovieDetails.js';
import { navigateTo } from '../lib/hashRouter.js';
import logger from '../lib/logger.js';
import createDetailView from '../views/detailView.js';

function createDetailPage(state, imdbID) {
  const props = {
    onBackClick() {
      navigateTo('home');
    },
  };
  const detailView = createDetailView(props);

  const getData = async () => {
    state.error = null;
    state.loading = true;
    detailView.update(state);

    try {
      state.movie = await fetchMovieDetails(imdbID);
    } catch (err) {
      logger.error('detailPage', err.message);
      navigateTo('error');
      return;
    }

    state.loading = false;
    detailView.update(state);
  };

  getData();

  return detailView;
}

export default createDetailPage;
