import Player from './Factories/Player';
import {selfBoard, opponentBoard, selfBoardDiv, opponentBoardDiv} from '../index';
import ComputerAttack from './ComputerAttack';

const human = Player();
const computer = Player();
const computerAttack = ComputerAttack();

const turnInfo = document.querySelector('#turnInfo');
const turnText = turnInfo.querySelector('.turn');

let turn = 'player';
turnText.textContent = turn;

function getTurn() {
    turn = turn === 'player' ? 'computer' : 'player';
    return turn;
}

function computerTurn() {
    // computer's attack on human
    turnText.textContent = getTurn();

    let position = computerAttack.getComputerAttackPosition();
    console.log(position);
    let cell = selfBoardDiv.querySelector(`div[data-key="${position}"]`);

    const computerResult = attack(computer, selfBoard, cell, position);
    console.log(computerResult);

    // Update hits and misses so computer can make intelligent guesses next time
    if(computerResult === 'hit') {
        computerAttack.updateHits(position);
    } else {
        computerAttack.updateMiss(position);
    }
    selfBoardDiv.classList.add('wait');
    opponentBoardDiv.classList.remove('wait');
}

function playRound(e) {
    if(selfBoard.allShipsSunk() || opponentBoard.allShipsSunk()) {
        const winner = opponentBoard.allShipsSunk() ? 'player' : 'computer';
        turnText.textContent = `winner is ${winner}`;
        return;
    }
    if(turn === 'computer') return;

    turnText.textContent = getTurn();

    // human's attack on computer
    let cell = e.target;
    let position = cell.getAttribute('data-key');

    // Don't play round if user attacks already attacked position
    if([...cell.classList].includes('hit') || [...cell.classList].includes('miss')) return;

    attack(human, opponentBoard, cell, position);
    selfBoardDiv.classList.remove('wait');
    opponentBoardDiv.classList.add('wait');
    setTimeout(computerTurn,2000);
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
