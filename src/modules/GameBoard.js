import Ship from './Ship';

function GameBoard() {
    const board = [];
    const ships = [];

    // Initialize an empty board of size 10 * 10
    for(let i = 0; i < 100; i ++) {
        board.push('vacant');
    }

    const placeShip = (positions) => {
        if(positions.every(position => board[position] === 'vacant')) {
            positions.forEach(position => board[position] = 'occupied')
        } else {
            console.log("one or more positions are occupied")
        }
    }

    const receiveAttack = (position) => {
        if(board[position] === 'occupied') {
            board[position] = 'hit';
        } else {
            board[position] = 'missed';
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