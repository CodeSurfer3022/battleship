import Ship from './Ship';

function GameBoard() {
    const board = [];
    const ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        board.push(undefined);
    }

    const placeShip = (positions) => {
        if(positions.every(position => board[position] === undefined)) {
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
        } else if (board[position] === 'miss' || board[position] === 'hit'){

        } else {
            const index = board[position];
            const hitShip = ships[index];
            hitShip.hit(position);
            board[position] = 'hit';
        }
    }

    return {
        board,
        ships,
        placeShip,
        receiveAttack
    }
}

export default GameBoard;