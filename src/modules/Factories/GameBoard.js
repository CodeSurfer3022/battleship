const Ship = require('./Ship');

function GameBoard() {
    const boardArray = [];
    const ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        boardArray.push(undefined);
    }

    const placeShip = (positions) => {
        if(positions.every(position => boardArray[position] === undefined)) {
            const ship = Ship(positions);
            let index = ships.length;
            positions.forEach(position => boardArray[position] = index);
            ships.push(ship);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const updateShip = (index, positions) => {
        // remove ship from old position
        boardArray.forEach(position => {
            if(position === index) {
                position = undefined;
            }
        });

        // replace old ship with new ship
        ships[index] = Ship(positions);

        // place this ship on the boardArray
        placeShip(positions);
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
        updateShip,
        receiveAttack,
        allShipsSunk
    }
}

export default GameBoard;