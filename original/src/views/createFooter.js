import createElement from '../helpers/createElement.js';
import createPopUp from './createPopUp.js';

const createFooter = () => {
  const footer = createElement('footer');
  const applications = createElement('div', 'applications', 'applications');
  const gPlayImg = createElement('img');

  gPlayImg.src = './public/img/googleplay.png';
  gPlayImg.setAttribute('alt', 'googleplay');

  gPlayImg.addEventListener('click', () => {
    const popup = createPopUp(applications, 'It has not implemented yet');
    applications.appendChild(popup);
  });
  const copyRight = createElement('div', 'copy-right', 'copy-right');

  const pElement = createElement('p');
  pElement.textContent = 'Designed by Ali Demirci @2022';

  footer.appendChild(applications);
  applications.appendChild(gPlayImg);
  footer.appendChild(copyRight);
  copyRight.appendChild(pElement);

  return footer;
};
export default createFooter;
