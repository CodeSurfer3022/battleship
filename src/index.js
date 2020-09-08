import GameBoard from './modules/GameBoard';
import renderBoard from './modules/BoardRender';
import playRound from './modules/GameLoop';

const humanBoard = GameBoard();
const computerBoard = GameBoard();

/******************************************************************************************
 * placement of ships
 *******************************************************************************************/
console.log("human, place your ships")
humanBoard.placeShip([1, 2, 3]);
humanBoard.placeShip([10, 20, 30]);
humanBoard.placeShip([50]);

computerPlacement();

function computerPlacement() {
    computerBoard.placeShip([1]);
    computerBoard.placeShip([10, 11]);
    computerBoard.placeShip([90, 91, 92]);
}

console.log(humanBoard);
console.log(computerBoard);

/******************************************************************************************
 * placement of ships
 *******************************************************************************************/

const humanBoardDiv = document.querySelector('#humanBoardDiv');
const computerBoardDiv = document.querySelector('#computerBoardDiv');

renderBoard(humanBoard.board, humanBoardDiv);
renderBoard(computerBoard.board, computerBoardDiv);

computerBoardDiv.addEventListener('click', playRound);

export {computerBoard, humanBoard, humanBoardDiv}