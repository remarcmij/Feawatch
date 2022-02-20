const createCategoryOption = (selectId) => {
  const categories = ['movie', 'episode', 'series'];
  const selectElement = document.getElementById(selectId);
  selectElement.innerHTML = `<option value="">Select Type</option>`;
  categories.forEach((category) => {
    selectElement.innerHTML += `
    <option value="${category}">${category}</option>`;
  });
};
export default createCategoryOption;
