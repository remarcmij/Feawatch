function createWelcomeView() {
  const root = document.createElement('div');
  root.innerHTML = String.raw`
    <h1>You have no favorited video yet</h1>
    <p>
      Please make a video search and add videos to favorited videos to see
      here.
    </p>  
  `;

  return { root };
}

export default createWelcomeView;
