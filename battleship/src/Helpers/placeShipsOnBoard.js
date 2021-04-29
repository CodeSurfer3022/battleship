function placeShipsOnBoard(ships) {
  let positions = [];
  for(let i = 0; i < 100; i ++) {
    positions.push(undefined);
  }

  console.log(ships);
  ships.forEach((ship, index) => {
    ship.positions.forEach(position => {
      console.log(position, index);
      positions[position] = index;
    });
  });
  return positions;
}

export default placeShipsOnBoard;
