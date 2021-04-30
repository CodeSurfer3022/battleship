import React, {useState} from "react";
import "./PlayArea.css";

import GameBoardContainer from "./GameBoardContainer";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

function PlayArea(props) {
  const {player, computer} = props;
  const [boardValues, setBoardValues] = useState(
    {
      [player.name]: initialValues,
      [computer.name]: initialValues
    })

  function attack(player, opponent, position) {
    console.log(player, opponent, opponent.board[position]);

    player.attack(opponent, position)

    console.log(player.board.boardValues);
    setBoardValues(boardValues => {
      const newBoardValues = {};
      newBoardValues[player.name] = boardValues[player.name];
      newBoardValues[opponent.name] = opponent.board.boardValues.slice();

      return newBoardValues;
    });
  }

  function playRound(event) {
    // player's attack on computer
    let position = event.target.getAttribute('data-key');
    attack(player, computer, position);

    // computer's attack on player
    position = getComputerAttackPosition(player.board);
    setTimeout(() => attack(computer, player, position), 1000);
  }

  return(
    <div className="play-area">
      <GameBoardContainer
        player={player.name}
        boardValues={boardValues[player.name]}
        ships={player.ships}
        playRound={null}
      />

      <GameBoardContainer
        player={computer.name}
        boardValues={boardValues[computer.name]}
        ships={computer.ships}
        playRound={playRound}
      />
    </div>
  )
}

export default PlayArea;
