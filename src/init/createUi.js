import createHeader from '../views/createHeader.js';
import createContainer from '../views/createContainer.js';
import createFooter from '../views/createFooter.js';
import createDate from '../helpers/createDate.js';
import createCategoryOption from '../helpers/createCategoryOption.js';
const createUi = () => {
  const header = createHeader();
  const container = createContainer();
  const footer = createFooter();
  document.body.appendChild(header);
  document.body.appendChild(container);
  document.body.appendChild(footer);
  createDate('dateSelect');
  createCategoryOption('search-by-category');
};
export default createUi;
