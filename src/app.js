//@ts-check
import createRouter from './lib/hashRouter.js';
import routes from './pages/routes.js';

const loadApp = () => {
  const appRoot = document.getElementById('app-root');
  const routerOutlet = document.createElement('div');
  routerOutlet.id = 'router-outlet';
  appRoot.appendChild(routerOutlet);

  createRouter(routes, routerOutlet);
};

window.addEventListener('load', loadApp);
