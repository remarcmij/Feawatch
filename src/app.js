import router from './lib/router.js';
import log from './lib/logger.js';
import routes from './pages/routes.js';

const initialState = {
  page: 1,
  movies: null,
  movie: null,
  error: null,
  loading: false,
};

const loadApp = () => {
  log.setLevel('debug');
  log.info('application', 'started');

  const appRoot = document.getElementById('app-root');
  const routerOutlet = document.createElement('div');
  routerOutlet.id = 'router-outlet';
  appRoot.appendChild(routerOutlet);

  router.start(routes, routerOutlet, { ...initialState });
};

window.addEventListener('load', loadApp);
