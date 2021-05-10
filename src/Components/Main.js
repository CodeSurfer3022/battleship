import React, {useState} from "react";
import './Main.css';

import GameRibbon from "./GameRibbon";
import PlayArea from "./PlayArea";
import Player from "../Factories/Player";
import Board from "../Factories/Board";
import makeShips from "../Helpers/makeShips";
import computerAttack from "../Helpers/computerAttack";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

// The initial turn is of player
let turn = player;
let attackResult;
let winner;

console.log(computer.ships.forEach(ship => console.log(ship.positions)));

function Main() {


  function attack(player, opponent, position) {
    if(turn === opponent) return;
    player.attack(opponent, position);

    attackResult = opponent.board.isPositionHit((position));

    // For computer, we need to update hits and misses, so it can remember them
    // and use it to attack more intelligently next time like humans do!
    if(player === computer) {
      if(attackResult) {
        computerAttack.updateHits(position);
      } else {
        computerAttack.updateMiss();
      }
    }

    // If this attack sinks all ships, player won!
    if(opponent.board.areAllShipsSunk()) {
      winner = player;
    }

    turn = opponent;

    setBoardValues(boardValues => {
      const newBoardValues = {};
      newBoardValues[player.name] = boardValues[player.name];
      newBoardValues[opponent.name] = opponent.board.boardValues.slice();

      return newBoardValues;
    });
  }

  function playRound(event) {
    // Don't play anymore if anyone wins
    if(winner) return;

    // player's attack on computer
    let position = event.target.getAttribute('data-key');
    // Don't allow player to attack same cell twice
    if (computer.board.isPositionAttacked(position)) return;
    attack(player, computer, position);

    console.log(turn);

    // computer's attack on player
    position = computerAttack.getAttackPosition(player.board);
    setTimeout(() => attack(computer, player, position), 1000);
    console.log(turn);
  }

  return(
    <main>
      <GameRibbon turn={turn}
                  opponent={turn === player ? computer: player}
                  winner={winner}
                  attackResult={attackResult}
      />
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
