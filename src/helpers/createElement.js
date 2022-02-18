const createElement = (tag, id, className) => {
  const element = document.createElement(tag);
  if (id) {
    element.setAttribute('id', id);
  }
  if (className) {
    element.setAttribute('class', className);
  }
  return element;
};
export default createElement;
