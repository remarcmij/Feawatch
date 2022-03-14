function createSearchBarView(props) {
  const root = document.createElement('div');
  root.className = 'search-bar';
  root.innerHTML = String.raw`
    <input id="search-input" placeholder="Search with title" />
    <button type="button" id="search-button" >
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <select id="search-by-category">
      <option value="">Filter By Type</option>
      <option value="movie">movie</option>
      <option value="episode">episode</option>
      <option value="series">series</option>
    </select>
    <select id="dateSelect">
      <option value="">Filter By Year</option>
    </select>
  `;

  const input = root.querySelector('#search-input');
  input.addEventListener('input', props.onInput);
  input.addEventListener('keypress', props.onKeypress);

  const btnSearch = root.querySelector('#search-button');
  btnSearch.addEventListener('click', props.onSearchButton);

  const selectCategory = root.querySelector('#search-by-category');
  selectCategory.addEventListener('change', props.onCategoryChange);

  const selectDate = root.querySelector('#dateSelect');
  selectDate.addEventListener('change', props.onDateChange);

  for (let year = 2022; year >= 1981; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    selectDate.appendChild(option);
  }

  return { root };
}

export default createSearchBarView;
