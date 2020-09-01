import Ship from './modules/Ship';
import GameBoard from './modules/GameBoard';

let board = GameBoard();
console.log(board);

board.placeShip([1,2]);
console.log(board);

board.receiveAttack(1);
board.receiveAttack(0);
board.receiveAttack(2);

board.placeShip([3]);

console.log(board);
console.log(board.ships[0].isSunk());
console.log(board.allShipsSunk());