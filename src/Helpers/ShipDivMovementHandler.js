import {getOffsets} from "./styleShip";

function updateShipDivData(ship, start, end) {
  ship.setAttribute('data-start', start);
  ship.setAttribute('data-end', end);
}

function getPositionsFromShipDiv(orientation, length, start) {
  const positions = [];
  let position = start;

  const increment = orientation === 'vertical' ? 10 : 1;

  for (let i = 0; i < length; i++) {
    positions.push(position);
    position += increment;
  }
  return positions;
}

function areValidPositions(playerBoard, newPositions, oldPositions, orientation, start, end) {
  // each position must either be empty or one of previous positions
  const areValidPositions = newPositions.every(newPosition =>
    playerBoard[newPosition] === undefined
    || oldPositions.includes(newPosition));

  console.log(areValidPositions);

  // and none of the new positions are out of the board
  const arePositionsOnBoard = !newPositions.some(newPosition => newPosition > 99 || newPosition < 0);
  console.log(start, end);
  console.log(arePositionsOnBoard)

  // all positions are on the same row for horizontal ships
  // and same column for vertical ships
  let inline =  orientation === 'horizontal' ? Math.floor(start/10) === Math.floor(end/10)
    : start % 10 === end % 10;
  console.log(inline);

  return areValidPositions && arePositionsOnBoard && inline;

}

function handleDrop(player, ship, cell) {
  // move the div
  const orientation = [...ship.classList].includes('horizontal') ? 'horizontal' : 'vertical';
  const length = ship.getAttribute('data-length');

  console.log(orientation, length);

  // get old end and positions
  const oldEnd = parseInt(ship.getAttribute('data-end'));
  const oldPositions = getPositionsFromShipDiv(orientation, length, oldEnd);
  console.log(oldEnd, oldPositions);

  // check if moving this div will cause any of the positions to overlap
  const newStart = parseInt(cell.getAttribute('data-key'));
  const newPositions = getPositionsFromShipDiv(orientation, length, newStart);

  if (!areValidPositions(player.board, newPositions, oldPositions, orientation,
    newStart, newPositions[length - 1])) return;

  console.log(newStart, newPositions);

  // Now since the new positions are valid, we can move the ship
  // div by styling it
  updateShipDivData(ship, newPositions[0], newStart);
  const {topOffset, leftOffset} = getOffsets(newPositions[0])
  ship.style.top = `${topOffset}px`;
  ship.style.left = `${leftOffset}px`;

  const shipIndex = parseInt(ship.getAttribute('data-ship'));

  // update ships info on player board
  player.board.updateShip(shipIndex, oldPositions, newPositions);

}

export default handleDrop;
