import GameBoard from './modules/GameBoard';
import Player from './modules/Player';

const player1 = Player();
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

console.log("placement is done, let the game begin")

let turn = "player1";

while(!playerBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
    if(turn === "player1") {
        const position = prompt("enter position to attack");
        player1.attack(computerBoard, position);
    } else {
        const position = Math.round(Math.random() * 100);
        console.log(position);
    }
    turn = turn === "player1" ? "computer" : "player1";
    console.log(playerBoard.allShipsSunk());
    console.log(computerBoard.allShipsSunk());
}
