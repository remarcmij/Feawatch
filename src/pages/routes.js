import createDetailPage from './detailPage.js';
import createMainPage from './mainPage.js';

const routes = [
  { path: 'home', page: createMainPage, default: true },
  { path: 'detail', page: createDetailPage },
];

export default routes;
