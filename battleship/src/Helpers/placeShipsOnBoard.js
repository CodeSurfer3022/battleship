function placeShipsOnBoard(ships) {
  let positions = [];
  for(let i = 0; i < 100; i ++) {
    positions.push(undefined);
  }

  ships.forEach((ship, index) => {
    ship.positions.forEach(position => {
      positions[position] = index;
    });
  });
  return positions;
}

export default placeShipsOnBoard;
