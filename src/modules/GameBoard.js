const Ship = require('./Ship');

function arePositionsValid(positions) {
    let isHorizontal = true;
    for(let i = 1; i < positions.length; i ++) {
        if(positions[i] - positions[i - 1] !== 1) {
            isHorizontal = false;
            break;
        }
    }

    let isVertical = true;
    for(let i = 1; i < positions.length; i ++) {
        if(positions[i] - positions[i - 1] !== 10) {
            isVertical = false;
            break;
        }
    }

    return isHorizontal || isVertical;
}

function GameBoard() {
    const board = [];
    const ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        board.push(undefined);
    }

    const placeShip = (positions) => {
        if(positions.every(position => board[position] === undefined) &&
            arePositionsValid(positions)
        ) {
            const ship = Ship(positions);
            let index = ships.length;
            positions.forEach(position => board[position] = index);
            ships.push(ship);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const receiveAttack = (position) => {
        if(board[position] === undefined) {
            board[position] = 'miss';
        } else if (board[position] !== 'miss' && board[position] !== 'hit'){
            const index = board[position];
            const hitShip = ships[index];
            hitShip.hit(position);
            board[position] = 'hit';
        }
    }

    const allShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    }

    return {
        board,
        ships,
        placeShip,
        receiveAttack,
        allShipsSunk
    }
}

module.exports = GameBoard;