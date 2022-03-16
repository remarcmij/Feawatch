import createRouter from './lib/hashRouter.js';
import log from './lib/logger.js';
import routes from './pages/routes.js';

const initialState = {
  page: 1,
  movies: null,
  error: null,
  loading: false,
};

const loadApp = () => {
  log.setLevel('silly');
  log.info('application', 'started');

  const appRoot = document.getElementById('app-root');
  const routerOutlet = document.createElement('div');
  routerOutlet.id = 'router-outlet';
  appRoot.appendChild(routerOutlet);

  const router = createRouter(routes, routerOutlet, { ...initialState });
  router.start();
};

window.addEventListener('load', loadApp);
