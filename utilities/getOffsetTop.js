export default (elem) => {
  let elemCopy = elem;
  let distance = 0;

  if (elemCopy.offsetParent) {
    do {
      distance += elem.offsetTop;
      elemCopy = elemCopy.offsetParent;
    } while (elemCopy);
  }

  return distance < 0 ? 0 : distance;
};
