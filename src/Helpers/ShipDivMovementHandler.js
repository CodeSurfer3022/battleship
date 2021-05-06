function moveShipDiv(ship, cell, orientation, length) {
//     if(orientation === 'vertical') {
//         const newBottom = cell.getAttribute('data-key');
//         const newTop = newBottom - (length - 1) * 10;
//         if(newTop < 0) return;
//
//         styleShip(ship, 'vertical', newTop, newBottom);
//     } else {
//         const newRight = cell.getAttribute('data-key');
//         const row = Math.floor(newRight / 10);
//         const newLeft = newRight - (length - 1);
//         if(newLeft < row * 10) return;
//
//         styleShip(ship, 'horizontal', newLeft, newRight);
//     }
}

function getPositionsFromShipDiv(orientation, length, end) {
    const positions = [];
    let position = end;

    const decrement = orientation === 'vertical' ? 10 : 1;

    for(let i = 0; i < length; i ++) {
        positions.push(position);
        position -= decrement;
    }
    return positions;
}

function areValidPositions(newPositions, oldPositions) {
//     return newPositions.every(newPosition => {
//         // each position must either be empty or one of previous positions
//         return (selfBoard.boardArray[newPosition] === undefined
//                 || oldPositions.includes(newPosition)
//         )
//     });
}

function handleDrop(ship, cell) {
  // move the div
  const orientation = [...ship.classList].includes('horizontal') ? 'horizontal' : 'vertical';
  const length = ship.getAttribute('data-length');

  console.log(orientation,length);

  // get old end and positions
  const oldEnd = parseInt(ship.getAttribute('data-end'));
  const oldPositions = getPositionsFromShipDiv(orientation, length, oldEnd);
  console.log(oldEnd, oldPositions);

  // check if moving this div will cause any of the positions to overlap
  const newEnd = parseInt(cell.getAttribute('data-key'));
  const newPositions = getPositionsFromShipDiv(orientation, length, newEnd);

  if(!areValidPositions(newPositions, oldPositions)) return;
  console.log(newEnd, newPositions);
  //
  // moveShipDiv(ship, cell, orientation, length);
  //
  // const shipIndex = parseInt(ship.getAttribute('data-ship'));
  // console.log(shipIndex, oldPositions, newPositions);
  // selfBoard.updateShip(shipIndex, oldPositions, newPositions);

}

export  {handleDrop, moveShipDiv, getPositionsFromShipDiv, areValidPositions};
