function checkValidHorizontalPosition(unavailablePositions, position, size) {
  const row = Math.floor(position / 10);
  const end = (row + 1) * 10;

  // checking if last position will be in the same row
  if(position + size - 1 >= end) {
    return false
  }

  // check if all positions with this starting position are available
  for(let i = 0; i < size; i ++) {
    position ++;
    if(unavailablePositions.includes(position)) return false;
  }

  return true;
}

function checkValidVerticalPosition(unavailablePositions, position, size) {
  const col = position % 10;
  const end = col + 90;

  // checking if last position will be in the same column
  if(position + (size - 1) * 10 > end) {
    return false;
  }

  // check if all positions with this starting position are available
  for(let i = 0; i < size; i ++) {
    position += 10;
    if(unavailablePositions.includes(position)) return false;
  }

  return true;
}

function isvalidPosition(unavailablePositions ,position, size, orientation) {
  if(unavailablePositions.includes(position)) return false;

  if(orientation === 'horizontal') {
    return checkValidHorizontalPosition(unavailablePositions, position, size);
  } else {
    return checkValidVerticalPosition(unavailablePositions, position, size);
  }
}

function getValidPosition(unavailablePositions, size, orientation) {
  let position = Math.floor(Math.random() * 100);
  while(!isvalidPosition(unavailablePositions, position, size, orientation))
  {
    position = Math.floor(Math.random() * 100);
  }
  return position;
}

function makeShips() {
  const unavailablePositions = [];
  const ships = [];
  // let's make 5 ships of sizes 1 to 5
  for(let size = 1; size <= 5; size ++) {
    let ship = {orientation:'', positions:[]};

    let orientation = size % 2 ? 'vertical' : 'horizontal';
    ship.orientation = orientation;

    let position = getValidPosition(unavailablePositions, size, orientation);
    for(let i = 0; i < size; i ++) {
      ship.positions.push(position);
      unavailablePositions.push(position);
      if(orientation === 'vertical') {
        position += 10;
      } else {
        position ++;
      }
    }
    ships.push(ship);
  }
  console.log(ships);
  return ships;
}

export default makeShips;
