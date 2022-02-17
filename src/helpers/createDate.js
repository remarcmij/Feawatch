const createDate = (selectId) => {
  let date = 2022;
  const selectElement = document.getElementById(selectId);
  selectElement.innerHTML = `<option value=""></option>`;
  while (date > 1980) {
    selectElement.innerHTML += `
    <option value="${date}">${date}</option>`;
    date--;
  }
};
export default createDate;
