import React, {useState} from "react";
import './Main.css';

import GameRibbon from "./GameRibbon";
import PlayArea from "./PlayArea";
import Player from "../Factories/Player";
import Board from "../Factories/Board";
import makeShips from "../Helpers/makeShips";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";

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

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

// The initial turn is of player
let turn = player;

function Main() {
  const [boardValues, setBoardValues] = useState(
    {
      [player.name]: initialValues,
      [computer.name]: initialValues
    })

  function attack(player, opponent, position) {
    console.log('in attack player is ' + player.name)
    if(turn === opponent) return;
    player.attack(opponent, position)
    turn = opponent;

    setBoardValues(boardValues => {
      const newBoardValues = {};
      newBoardValues[player.name] = boardValues[player.name];
      newBoardValues[opponent.name] = opponent.board.boardValues.slice();

      return newBoardValues;
    });
    console.log('at end of attack opponent is ' + opponent.name);
  }

  function playRound(event) {
    // player's attack on computer
    let position = event.target.getAttribute('data-key');
    // Don't allow player to attack same cell twice
    if (computer.board.isPositionHit(position)) return;
    attack(player, computer, position);

    // computer's attack on player
    position = getComputerAttackPosition(player.board);
    setTimeout(() => attack(computer, player, position), 1000);
  }

  return(
    <main>
      <GameRibbon />
      <PlayArea
        player={player}
        computer={computer}
        turn={turn}
        boardValues={boardValues}
        playRound={playRound}
      />
    </main>
  )
}

export default Main;
