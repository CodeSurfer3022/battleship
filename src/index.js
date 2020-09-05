import GameBoard from './modules/GameBoard';
import Player from './modules/Player';
import renderBoard from './modules/BoardRender';
import actionHandler from './modules/BoardActions';


const player = Player();
const computer = Player();

const  playerBoard = GameBoard();
const computerBoard = GameBoard();

console.log("player 1, place your ships")
playerBoard.placeShip([1, 2, 3]);
playerBoard.placeShip([10, 20, 30]);
playerBoard.placeShip([50]);

computerPlacement();

function computerPlacement() {
    computerBoard.placeShip([1]);
    computerBoard.placeShip([10, 11]);
    computerBoard.placeShip([90, 91, 92]);
}

console.log(playerBoard);
console.log(computerBoard);

const playerContainer = document.querySelector('#playerBoard');
const computerContainer = document.querySelector('#computerBoard');

renderBoard(playerContainer, playerBoard.board);
renderBoard(computerContainer, computerBoard.board);

console.log("placement is done, let the game begin")

let turn = "player";

const cells = computerContainer.querySelectorAll('.cell');
cells.forEach(cell => {
        cell.addEventListener('click',
            actionHandler.attack.bind(this, player, computerBoard, cell));
    }
);

// while(!playerBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
//     if(turn === "player") {
//         player.attack(computerBoard, position);
//     } else {
//         const position = Math.round(Math.random() * 100);
//         console.log(position);
//     }
//     turn = turn === "player" ? "computer" : "player";
//     console.log(playerBoard.allShipsSunk());
//     console.log(computerBoard.allShipsSunk());
// }
