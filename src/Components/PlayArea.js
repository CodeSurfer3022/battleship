import React, {useContext} from "react";
import "./PlayArea.css";

import GameBoardContainer from "./GameBoardContainer";
import dragFunctions from "../Helpers/dragFunctions";
import {computer, player} from "../Players";
import {PlayersContext} from "../PlayersContext";
import computerAttack from "../Helpers/computerAttack";

// The initial turn is of player
let turn = player;
let attackResult;
let winner;

function PlayArea() {

  const [boardValues, setBoardValues] = useContext(PlayersContext);
  console.log(boardValues, setBoardValues);

  function attack(player, opponent, position) {
    if(turn === opponent) return;
    player.attack(opponent, position);

    // attackResult = opponent.board.isPositionHit((position));

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
    // if(winner) return;

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

  return (
    <div className="play-area">
      <GameBoardContainer
        turn={turn}
        player={player}
        boardValues={boardValues[player.name]}
        ships={player.ships}
        playRound={null}
        dragFunctions={dragFunctions}
      />

      <GameBoardContainer
        turn={turn}
        player={computer}
        boardValues={boardValues[computer.name]}
        ships={computer.ships}
        playRound={playRound}
        dragFunctions={null}
      />
    </div>
  )
}

export default PlayArea;
