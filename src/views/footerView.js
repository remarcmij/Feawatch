function createFooterView() {
  const root = document.createElement('footer');
  root.innerHTML = String.raw`
    <div  class="applications">
      <img src="./public/img/googleplay.png" alt="googleplay" />
    </div>
    <div class="copy-right">
      <p>Designed by Ali Demirci @2022</p>
    </div>  
  `;
  root.className = 'results';

  return { root };
}

export default createFooterView;
