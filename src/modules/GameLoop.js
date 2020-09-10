import Player from './Factories/Player';
import {selfBoard, opponentBoard, selfBoardDiv} from '../index';

const human = Player();
const computer = Player();

function playRound(e) {
    if(selfBoard.allShipsSunk() || opponentBoard.allShipsSunk()) {
        const winner = opponentBoard.allShipsSunk() ? 'human' : 'computer';
        console.log(`winner is ${winner}`);
        return;
    }
    // human's attack on computer
    let cell = e.target;
    let position = cell.getAttribute('data-key');

    console.log(cell);
    attack(human, opponentBoard, cell, position);

    // computer's attack on human
    position = Math.floor(Math.random() * 100);
    cell = selfBoardDiv.querySelector(`div[data-key="${position}"]`);

    attack(computer, selfBoard, cell, position);
}

function attack(player, board, cell, position){
    player.attack(board, position);
    const result = board.boardArray[position];
    if (result === 'miss') {
        cell.classList.add('miss');
    } else if (result === 'hit'){
        cell.classList.add('hit');
    }
}

export default playRound;