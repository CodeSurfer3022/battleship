import GameBoard from './modules/Factories/GameBoard';
import renderBoard from './modules/DomManipulation/BoardDisplay';
import playRound from './modules/GameLoop';
import shipAndShipDivPlacement from './modules/DomManipulation/ShipAndShipDivPlacement';
import addDragEventListeners from './modules/DomManipulation/ShipDivMovement';

const selfBoard = GameBoard();
const opponentBoard = GameBoard();

const selfBoardDiv = document.querySelector('#self');
const opponentBoardDiv = document.querySelector('#opponent');
/******************************************************************************************
 * placement of ships
 *******************************************************************************************/
shipAndShipDivPlacement.randomPlacement(selfBoard, selfBoardDiv);
shipAndShipDivPlacement.randomPlacement(opponentBoard, opponentBoardDiv);

console.log(selfBoard);
console.log(opponentBoard);

/******************************************************************************************
 * placement of ships
 *******************************************************************************************/

renderBoard(selfBoard.board, selfBoardDiv);
renderBoard(opponentBoard.board, opponentBoardDiv);

// opponentBoardDiv.addEventListener('click', playRound);
addDragEventListeners();
export {opponentBoard, selfBoard, selfBoardDiv}