import createElement from './createElement.js';

const createPopUp = () => {
  const container = createElement('div', 'popup-container');
  const popupText = createElement('p', 'popup-text');

  popupText.textContent = 'It has not implemented yet';

  container.appendChild(popupText);
  return container;
};
export default createPopUp;
