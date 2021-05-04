import React from "react";
import "./GameBoard.css";

import Cell from "./Cell";
import Ship from "./Ship";

function GameBoard(props) {
  const {player, boardValues, ships, playRound, turn} = props;

  const pause = turn !== player ? '' : 'pause';

  const cells = boardValues.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
    />);

  const shipDivs = player === 'Player' ? ships.map((ship, index) =>
    <Ship key={index}
          ship={ship}
    />) : null;

  return(
    <div className={`game-board ${player} ${pause}`} onClick={playRound}>
      {cells}
      {shipDivs}
    </div>
  )
}

export default GameBoard;
