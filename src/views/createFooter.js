import createElement from '../helpers/createElement.js';
import createPopUp from '../helpers/createPopUp.js';

const createFooter = () => {
  const footer = createElement('footer');
  const applications = createElement('div', 'applications', 'applications');
  const gPlayImg = createElement('img');

  gPlayImg.src = './public/img/googleplay.png';
  gPlayImg.setAttribute('alt', 'googleplay');

  gPlayImg.addEventListener('click', () => {
    const popup = createPopUp();
    applications.appendChild(popup);

    setTimeout(() => {
      const popup = document.getElementById('popup-container');
      applications.removeChild(popup);
    }, 2000);
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
