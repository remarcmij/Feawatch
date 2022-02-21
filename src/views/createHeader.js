import createElement from '../helpers/createElement.js';
import createPopUp from '../helpers/createPopUp.js';

const createHeader = () => {
  const header = createElement('header');
  const logo = createElement('div', 'logo', 'logo');
  const logoImg = createElement('img');
  logoImg.src = './public/img/logo.png';
  const pElement = createElement('p');
  const aElement = createElement('a', 'register');

  pElement.textContent = 'FeaWatch is a movie search platform.';
  aElement.textContent = 'Register/Sign In';

  aElement.addEventListener('click', () => {
    document.body.appendChild(createPopUp());

    setTimeout(() => {
      const popup = document.getElementById('popup-container');
      document.body.removeChild(popup);
    }, 2000);
  });

  header.appendChild(logo);
  logo.appendChild(logoImg);
  header.appendChild(pElement);
  header.appendChild(aElement);
  return header;
};
export default createHeader;
