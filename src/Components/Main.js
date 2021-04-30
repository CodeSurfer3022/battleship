import React from "react";
import './Main.css';

import GameRibbon from "./GameRibbon";
import PlayArea from "./PlayArea";
import Player from "../Factories/Player";
import Board from "../Factories/Board";
import makeShips from "../Helpers/makeShips";

// create Players to access attack functionality
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
player.ships = playerShips;

computer.board = computerBoard;
computer.ships = computerShips;

function Main() {
  return(
    <main>
      <GameRibbon />
      <PlayArea player={player} computer={computer}/>
    </main>
  )
}

export default Main;
