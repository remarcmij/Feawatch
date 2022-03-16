import createHeaderView from './headerView.js';

function createErrorView(props) {
  const root = document.createElement('div');

  const headerView = createHeaderView();
  root.appendChild(headerView.root);

  const container = document.createElement('div');
  container.className = 'dialog-container';
  root.appendChild(container);

  container.innerHTML = String.raw`
    <div class="dialog-content whiteframe ">
      <p>${props.error?.message ?? 'Oops... something went wrong.'}</p>
      <button type="button">Home</button>
    </div>
  `;

  const homeButton = root.querySelector('button');
  homeButton.addEventListener('click', props.onClick);

  return { root };
}

export default createErrorView;
