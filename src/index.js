import {GameBoard} from './modules/Factories/GameBoard';
import renderBoard from './modules/DomManipulation/BoardDisplay';
import playRound from './modules/GameLoop';
import shipPlacement from './modules/DomManipulation/ShipPlacement';

const selfBoard = GameBoard();
const opponentBoard = GameBoard();

const selfBoardDiv = document.querySelector('#self');
const opponentBoardDiv = document.querySelector('#opponent');
/******************************************************************************************
 * placement of ships
 *******************************************************************************************/
shipPlacement.randomPlacement(selfBoard, selfBoardDiv);
// shipPlacement.randomPlacement(opponentBoard, opponentBoardDiv);

console.log(selfBoard);
console.log(opponentBoard);

/******************************************************************************************
 * placement of ships
 *******************************************************************************************/


renderBoard(selfBoard.board, selfBoardDiv);
renderBoard(opponentBoard.board, opponentBoardDiv);

// opponentBoardDiv.addEventListener('click', playRound);

export {opponentBoard, selfBoard, selfBoardDiv}