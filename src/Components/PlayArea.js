import React, {useState} from "react";
import "./PlayArea.css";

import GameBoardContainer from "./GameBoardContainer";
import computerAttack from "../Helpers/computerAttack";

function PlayArea(props) {
  const {player, computer, boardValues, playRound, turn} = props;

  return(
    <div className="play-area">
      <GameBoardContainer
        turn={turn.name}
        player={player.name}
        boardValues={boardValues[player.name]}
        ships={player.ships}
        playRound={null}
      />

      <GameBoardContainer
        turn={turn.name}
        player={computer.name}
        boardValues={boardValues[computer.name]}
        ships={computer.ships}
        playRound={playRound}
      />
    </div>
  )
}

export default PlayArea;
