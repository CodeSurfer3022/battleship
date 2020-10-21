import Player from './Factories/Player';
import {selfBoard, opponentBoard, selfBoardDiv} from '../index';
import ComputerAttack from './ComputerAttack';

const human = Player();
const computer = Player();
const computerAttack = ComputerAttack();

function playRound(e) {
    if(selfBoard.allShipsSunk() || opponentBoard.allShipsSunk()) {
        const winner = opponentBoard.allShipsSunk() ? 'human' : 'computer';
        console.log(`winner is ${winner}`);
        return;
    }
    // human's attack on computer
    let cell = e.target;
    let position = cell.getAttribute('data-key');

    // Don't play round if user attacks already attacked position
    if([...cell.classList].includes('hit') || [...cell.classList].includes('miss')) return;

    attack(human, opponentBoard, cell, position);

    // computer's attack on human
    position = computerAttack.getComputerAttackPosition();
    console.log(position);
    cell = selfBoardDiv.querySelector(`div[data-key="${position}"]`);

    const computerResult = attack(computer, selfBoard, cell, position);
    console.log(computerResult);

    // Update hits and misses so computer can make intelligent guesses next time
    if(computerResult === 'hit') {
        computerAttack.updateHits(position);
    } else {
        computerAttack.updateMiss(position);
    }
}

function attack(player, board, cell, position){
    player.attack(board, position);
    const result = board.boardArray[position];
    if (result === 'miss') {
        cell.classList.add('miss');
    } else if (result === 'hit'){
        cell.classList.add('hit');
    }
    return result;
}

export default playRound;