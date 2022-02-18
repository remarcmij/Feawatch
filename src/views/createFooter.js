import createElement from '../helpers/createElement.js';
const createFooter = () => {
  const footer = createElement('footer');
  const applications = createElement('div', 'applications', 'applications');
  const gPlayImg = createElement('img');
  gPlayImg.src = './public/img/googleplay.png';
  gPlayImg.setAttribute('alt', 'googleplay');
  const aStoreImg = createElement('img');
  aStoreImg.src = './public/img/appstore.png';
  aStoreImg.setAttribute('alt', 'applestore');
  const copyRight = createElement('div', 'copy-right', 'copy-right');
  const pElement = createElement('p');
  pElement.textContent = 'Designed by Ali Demirci @2022';
  footer.appendChild(applications);
  applications.appendChild(gPlayImg);
  applications.appendChild(aStoreImg);
  footer.appendChild(copyRight);
  copyRight.appendChild(pElement);
  return footer;
};
export default createFooter;
