const Ship = require('./Ship');

function GameBoard() {
    const boardArray = [];
    let ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        boardArray.push(undefined);
    }

    const placeShip = (index, positions) => {
        if(positions.every(position => boardArray[position] === undefined)) {
            const ship = Ship(positions);
            positions.forEach(position => boardArray[position] = index);
            ships.push(ship);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const removeAllShips = () => {
        for(let i = 0; i < 100; i ++) {
            boardArray[i] = undefined;
            ships.length = 0;
        }
    }

    const updateShip = (index, oldPositions, newPositions) => {
        // remove ship from old position
        oldPositions.forEach(position => boardArray[position] = undefined);

        ships.forEach(ship => console.log(ship.getPositions()));
        // replace old ship with new ship
        ships[index] = Ship(newPositions);

        ships.forEach(ship => console.log(ship.getPositions()));
        // place this ship on the boardArray
        newPositions.forEach(position => boardArray[position] = index);
    }

    const receiveAttack = (position) => {
        if(boardArray[position] === undefined) {
            boardArray[position] = 'miss';
        } else if (boardArray[position] !== 'miss' && boardArray[position] !== 'hit'){
            const index = boardArray[position];
            const hitShip = ships[index];
            hitShip.hit(position);
            boardArray[position] = 'hit';
        }
    }

    const allShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    }

    return {
        boardArray,
        ships,
        placeShip,
        removeAllShips,
        updateShip,
        receiveAttack,
        allShipsSunk
    }
}

export default GameBoard;
