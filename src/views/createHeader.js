import createElement from '../helpers/createElement.js';
const createHeader = () => {
  const header = createElement('header');
  const logo = createElement('div', 'logo', 'logo');
  const logoImg = createElement('img');
  logoImg.src = './public/img/logo.png';
  const pElement = createElement('p');
  const aElement = createElement('a');
  pElement.textContent =
    'FeaWatch is the most famous movie platform in the world';
  aElement.textContent = 'Register/Sign In';
  header.appendChild(logo);
  logo.appendChild(logoImg);
  header.appendChild(pElement);
  header.appendChild(aElement);
  return header;
};
export default createHeader;
