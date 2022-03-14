import createElement from '../helpers/createElement.js';

const createPopUp = (div, text) => {
  const container = createElement('div', 'popup-container');
  const popupText = createElement('p', 'popup-text');

  popupText.textContent = text;

  container.appendChild(popupText);
  setTimeout(() => {
    div.removeChild(container);
  }, 2000);
  return container;
};
export default createPopUp;
