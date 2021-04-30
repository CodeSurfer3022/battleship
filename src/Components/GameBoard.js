import React from "react";
import "./GameBoard.css";

import Cell from "./Cell";
import Ship from "./Ship";
import makeShips from "../Helpers/makeShips";

function GameBoard(props) {
  const {player, board, ships, playRound} = props;

  const cells = board.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
    />);

  return(
    <div className={`game-board ${player}`}>
      {cells}
    </div>
  )
}

export default GameBoard;
