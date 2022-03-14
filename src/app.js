//@ts-check
import createRouter from './lib/hashRouter.js';
import routes from './pages/routes.js';

const initialState = {
  page: 1,
  movies: null,
  error: null,
  loading: false,
};

const loadApp = () => {
  const appRoot = document.getElementById('app-root');
  const routerOutlet = document.createElement('div');
  routerOutlet.id = 'router-outlet';
  appRoot.appendChild(routerOutlet);

  createRouter(routes, routerOutlet, { ...initialState });
};

window.addEventListener('load', loadApp);
