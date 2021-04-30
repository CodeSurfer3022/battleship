const Ship = require('./Ship');

function Board() {
    const board = [];
    let ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        board.push(undefined);
    }

    const placeShip = (index, positions) => {
        if(positions.every(position => board[position] === undefined)) {
            const ship = Ship(positions);
            positions.forEach(position => board[position] = index);
            ships.push(ship);
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const placeAllShips = (ships) => {
        ships.forEach((ship, index) => placeShip(index, ship.positions));
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

    const areAllShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    }

    return {
        board,
        ships,
        placeAllShips,
        receiveAttack,
        areAllShipsSunk
    }
}

export default Board;
