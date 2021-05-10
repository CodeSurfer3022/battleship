// create Players to access attack functionality
import Player from "./Factories/Player";
import Board from "./Factories/Board";
import makeShips from "./Helpers/makeShips";

let player = Player('Player');
let computer = Player('Computer');

// make boards for players
let playerBoard = Board();
let computerBoard = Board();

// make ships for players
let playerShips = makeShips();
let computerShips = makeShips();

// place ships on the respective player's board
playerBoard.placeAllShips(playerShips);
computerBoard.placeAllShips(computerShips);

// Update players with their respective boards and ships
player.board = playerBoard;
player.ships = playerBoard.ships;

computer.board = computerBoard;
computer.ships = computerBoard.ships;

export {player, computer}
