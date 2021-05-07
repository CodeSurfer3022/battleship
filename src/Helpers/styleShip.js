function getOffsets(start, cellSize) {
  let  topOffset = Math.floor(start/ 10);
  topOffset *= cellSize;

  let leftOffset = start % 10;
  leftOffset *= cellSize;

  return {topOffset, leftOffset};
}

function styleShip(start, orientation, length, cellSize = 40) {
  const style = {position: 'absolute'};

  const {topOffset, leftOffset} = getOffsets(start, cellSize);
  style.top = `${topOffset}px`;
  style.left = `${leftOffset}px`;

  if(orientation === 'vertical') {
    style.width = `${cellSize}px`;
    style.height = `${cellSize * length}px`;
  } else {
    style.height = `${cellSize}px`;
    style.width = `${cellSize * length}px`;
  }

  return style;
}

export {styleShip, getOffsets};
