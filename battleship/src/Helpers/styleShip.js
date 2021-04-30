function styleShip(start, orientation, length) {
  const topOffset = Math.floor(start/ 10);
  const leftOffset = start % 10;

  const style = {position: 'absolute'};

  style.top = `${topOffset * 40}px`;
  style.left = `${leftOffset * 40}px`;

  if(orientation === 'vertical') {
    style.width = '40px';
    style.height = `${40 * length}px`;
  } else {
    style.height = '40px';
    style.width = `${40 * length}px`;
  }

  return style;
}

export default styleShip;
