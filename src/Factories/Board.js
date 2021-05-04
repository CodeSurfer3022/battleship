function Board() {
    const boardValues = [];
    let ships = [];

    // Initialize an empty boardValues of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        boardValues.push(undefined);
    }

    const placeShip = (index, positions) => {
        if(positions.every(position => boardValues[position] === undefined)) {
            positions.forEach(position => boardValues[position] = index);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const placeAllShips = (shipsArr) => {
        shipsArr.forEach((ship, index) => {
            ships.push(ship);
            placeShip(index, ship.positions)
        });
    }

    const receiveAttack = (position) => {
        if(boardValues[position] === undefined) {
            boardValues[position] = 'miss';
        } else if (boardValues[position] !== 'miss' && boardValues[position] !== 'hit'){
            const index = boardValues[position];
            const hitShip = ships[index];
            hitShip.hit(position);
            boardValues[position] = 'hit';
        }
    }

    const isPositionAttacked = (position) => isPositionHit(position) || isPositionMiss(position);
    const isPositionHit = (position) => boardValues[position] === 'hit';
    const isPositionMiss = (position) => boardValues[position] === 'miss';

    const areAllShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    }

    return {
        boardValues,
        ships,
        isPositionAttacked,
        isPositionHit,
        isPositionMiss,
        placeAllShips,
        receiveAttack,
        areAllShipsSunk
    }
}

export default Board;
