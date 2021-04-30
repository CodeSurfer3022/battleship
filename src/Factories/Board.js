const Ship = require('./Ship');

function Board() {
    const boardValues = [];
    let ships = [];

    // Initialize an empty boardValues of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        boardValues.push(undefined);
    }

    const placeShip = (index, positions) => {
        if(positions.every(position => boardValues[position] === undefined)) {
            const ship = Ship(positions);
            positions.forEach(position => boardValues[position] = index);
            ships.push(ship);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const placeAllShips = (ships) => {
        ships.forEach((ship, index) => placeShip(index, ship.positions));
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

    const isPositionHit = (position) => boardValues[position] === 'miss' || boardValues[position] === 'hit'

    const areAllShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    }

    return {
        boardValues,
        ships,
        isPositionHit,
        placeAllShips,
        receiveAttack,
        areAllShipsSunk
    }
}

export default Board;
