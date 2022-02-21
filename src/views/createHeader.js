import createElement from '../helpers/createElement.js';
import createPopUp from './createPopUp.js';

const createHeader = () => {
  const header = createElement('header');
  const logo = createElement('div', 'logo', 'logo');
  const logoImg = createElement('img');
  logoImg.src = './public/img/logo.png';
  const pElement = createElement('p');
  const aElement = createElement('a', 'register');

  pElement.textContent = 'FeaWatch is a movie search platform.';
  aElement.innerHTML =
    '<i class="fa-solid fa-user-plus"></i> <i class="fa-solid fa-right-to-bracket"></i>';

  aElement.addEventListener('click', () => {
    document.body.appendChild(
      createPopUp(document.body, 'It has not implemented yet'),
    );
  });

  header.appendChild(logo);
  logo.appendChild(logoImg);
  header.appendChild(pElement);
  header.appendChild(aElement);
  return header;
};
export default createHeader;
