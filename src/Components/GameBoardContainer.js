import React from "react";
import "./GameBoardContainer.css";
import GameBoard from "./GameBoard";
import ShipsStatus from "./ShipsStatus";

function GameBoardContainer(props) {
  const {player, boardValues, ships, playRound, turn} = props;

  const pause = turn !== player ? '' : 'pause';

  return(
    <div className={`gameboard-container ${pause}`}>
      <GameBoard
        turn={turn}
        player={player}
        boardValues={boardValues}
        ships={ships}
        playRound={playRound}
      />
      {/*<ShipsStatus />*/}
    </div>
  )
}

export default GameBoardContainer;
