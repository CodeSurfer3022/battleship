import React from "react";
import "./GameBoard.css";

import Cell from "./Cell";
import Ship from "./Ship";
import makeShips from "../Helpers/makeShips";

function GameBoard(props) {
  const {player, boardValues, ships, playRound} = props;

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
    <div className={`game-board ${player}`} onClick={playRound}>
      {cells}
      {shipDivs}
    </div>
  )
}

export default GameBoard;
