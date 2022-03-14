function createPaginationView(props) {
  const root = document.createElement('div');
  root.className = 'pagination';
  root.innerHTML = String.raw`
    <button type="button" id="btn-prev"><< Prev Page</button>
    <button type="button" id="btn-next">Next Page >></button>
  `;

  const btnPrev = root.querySelector('#btn-prev');
  btnPrev.addEventListener('click', props.onPrev);

  const btnNext = root.querySelector('#btn-next');
  btnNext.addEventListener('click', props.onNext);

  btnPrev.hidden = true;
  btnNext.hidden = true;

  const update = (state) => {
    if (state.movies) {
      btnPrev.hidden = false;
      btnNext.hidden = false;
    }

    btnPrev.disabled = false;
    btnNext.disabled = false;
    if (state.page <= 1) {
      btnPrev.disabled = true;
    } else if (state.page > state.movies.totalResults / 10) {
      btnNext.disabled = true;
    }
  };

  return { root, update };
}

export default createPaginationView;
