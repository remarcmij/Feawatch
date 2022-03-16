import createDetailPage from './detailPage.js';
import createErrorPage from './errorPage.js';
import createMainPage from './mainPage.js';

const routes = [
  { path: 'home', page: createMainPage, default: true },
  { path: 'detail', page: createDetailPage },
  { path: 'error', page: createErrorPage },
];

export default routes;
