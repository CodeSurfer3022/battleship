import GameBoard from './modules/Factories/GameBoard';
import renderBoard from './modules/DomManipulation/BoardDisplay';
import playRound from './modules/GameLoop';
import shipPlacement from './modules/DomManipulation/ShipPlacement';
import {
    addDragEventListeners,
    removeDragEventListeners,
    shipDivListeners
} from './modules/DomManipulation/ShipDivMovement';
import {placeAllShipDivs, removeAllShipDivs} from './modules/DomManipulation/ShipDivPlacement';

const selfBoard = GameBoard();
const opponentBoard = GameBoard();

const selfBoardDiv = document.querySelector('#self');
const opponentBoardDiv = document.querySelector('#opponent');
/******************************************************************************************
 * placement of ships
 *******************************************************************************************/
let {ships, orientations} = shipPlacement.randomPlacement(selfBoard);
placeAllShipDivs(ships, orientations);

shipPlacement.randomPlacement(opponentBoard, opponentBoardDiv);

console.log(selfBoard);
console.log(opponentBoard);

/******************************************************************************************
 * display boards after ships are placed
 *******************************************************************************************/

renderBoard(selfBoard.boardArray, selfBoardDiv);
renderBoard(opponentBoard.boardArray, opponentBoardDiv);

addDragEventListeners();
export {opponentBoard, selfBoard, selfBoardDiv}

/******************************************************************************************
 * handle events for randomize placement, reset game, start game
 *******************************************************************************************/
const gameControls = document.querySelector('#gameControls');

const randomButton = document.querySelector('#randomButton');
randomButton.addEventListener('click', () => {
    shipPlacement.removeShips(selfBoard);
    removeAllShipDivs();

    console.log(selfBoard.boardArray, selfBoard.ships);
    let res = shipPlacement.randomPlacement(selfBoard);
    placeAllShipDivs(res.ships, res.orientations);
    shipDivListeners();
    console.log(selfBoard.boardArray, selfBoard.ships);

});

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
    opponentBoardDiv.addEventListener('click', playRound);
    removeDragEventListeners();
    gameControls.classList.add('hidden');
});
