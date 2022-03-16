import log from '../lib/logger.js';
import createLoadingIndicator from './loadingIndicator.js';

function createDetailView(props) {
  const root = document.createElement('div');
  root.innerHTML = String.raw`
    <header>
      <button type="button" id="btn-back">Back</button>
    </header>
    <div id="card-detail-container"></div>
  `;

  const btnBack = root.querySelector('#btn-back');
  btnBack.addEventListener('click', props.onBackClick);

  const container = root.querySelector('#card-detail-container');

  const loadingIndicator = createLoadingIndicator();
  root.appendChild(loadingIndicator.root);
  loadingIndicator.root.hidden = true;

  const render = (movie) => {
    container.innerHTML = String.raw`
      <img src="${movie.Poster}" alt="${movie.Title}" height="480" />
      <div id="card-detail-content-wrapper">
        <h1>
          Movie Title: ${movie.Title}
        </h1>
        <p>Created : ${movie.Year}</p>
        <p>Language : ${movie.Language}</p>
        <p>Duration : ${movie.Runtime}</p>
        <p>IMDB Rating : ${movie.imdbRating}</p>
        <p>Director : ${movie.Director}</p>
        <p>Writer : ${movie.Writer}</p>
        <p>Actors : ${movie.Actors}</p>
        <p>Description: ${movie.description}</p>
      </div>  
    `;
  };

  const update = (state) => {
    log.debug('detailView', 'update:', state);

    if (state.loading) {
      loadingIndicator.root.hidden = false;
      return;
    }

    loadingIndicator.root.hidden = true;

    if (state.error) {
      throw new Error('Unexpected call to `update()`');
    }
    // handle loading
    render(state.movie);
  };

  return { root, update };
}

export default createDetailView;
