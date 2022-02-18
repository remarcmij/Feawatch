import createHeader from '../views/createHeader.js';
import createContainer from '../views/createContainer.js';
import createFooter from '../views/createFooter.js';
import createDate from '../helpers/createDate.js';
const createUi = () => {
  const header = createHeader();
  const container = createContainer();
  const footer = createFooter();
  document.body.appendChild(header);
  document.body.appendChild(container);
  document.body.appendChild(footer);
  createDate('dateSelect');
};
export default createUi;
