function createHeaderView() {
  const root = document.createElement('header');
  root.innerHTML = String.raw`
    <div id="logo" class="logo"><img src="./public/img/logo.png" /></div>
    <p>FeaWatch is a movie search platform.</p>
    <a id="register">
      <i class="fa-solid fa-user-plus"></i>
      <i class="fa-solid fa-right-to-bracket"></i>
    </a>
  `;
  return { root };
}

export default createHeaderView;
