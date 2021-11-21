export const initLog = (id) => {
  return function (text) {
    const element = document.getElementById(`logs${id}`);
    element.innerHTML = `${element.innerHTML}${text}\n`;
  };
};
