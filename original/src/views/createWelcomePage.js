import createElement from '../helpers/createElement.js';

const createWelcomePage = () => {
  const welcomeContainer = createElement('div', 'welcome-container');
  const title = createElement('h1', 'title');
  const message = createElement('p', 'message');
  title.textContent = 'You have no favorited video yet';
  message.textContent =
    'Please make a video search and add videos to favorited videos to see here.';
  welcomeContainer.appendChild(title);
  welcomeContainer.appendChild(message);
  return welcomeContainer;
};
export default createWelcomePage;
