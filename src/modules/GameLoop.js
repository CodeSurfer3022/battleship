import Player from './Player';
import {computerBoard, humanBoard} from '../index';


const human = Player();
const computer = Player();

function playRound(e) {
    if(humanBoard.allShipsSunk() || computerBoard.allShipsSunk()) {
        const winner = computerBoard.allShipsSunk() ? 'human' : 'computer';
        console.log(`winner is ${winner}`);
        return;
    }
    // human's attack on computer
    let cell = e.target;
    let position = cell.getAttribute('data-key');

    attack(human, computerBoard, cell, position);

    // computer's attack on human
    const humanBoardDiv = document.querySelector('#humanBoard');
    position = Math.round(Math.random() * 100);
    cell = humanBoardDiv.querySelector(`div[data-key="${position}"]`);

    attack(computer, humanBoard, cell, position);
}

function attack(player, board, cell, position){
    player.attack(board, position);
    const result = board.board[position];
    if (result === 'miss') {
        cell.classList.add('miss');
    } else if (result === 'hit'){
        cell.classList.add('hit');
    }
}

export default playRound;