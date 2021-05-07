import React from "react";
import "./GameBoard.css";

import Cell from "./Cell";
import Ship from "./Ship";

function GameBoard(props) {
  const {player, boardValues, ships, playRound, turn, dragFunctions} = props;

  const pause = turn !== player ? '' : 'pause';

  const cells = boardValues.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
          dragOver={dragFunctions.dragOver}
          dragEnter={dragFunctions.dragEnter}
          dragLeave={dragFunctions.dragLeave}
          dragDrop={(e) => dragFunctions.dragDrop(e, player)}
    />);

  const shipDivs = player.name === 'Player' ? ships.map((ship, index) =>
    <Ship key={index}
          index={index}
          ship={ship}
          dragStart={dragFunctions.dragStart}
          dragEnd={dragFunctions.dragEnd}
    />) : null;

  return(
    <div className={`game-board ${player.name} ${pause}`} onClick={playRound}>
      {cells}
      {shipDivs}
    </div>
  )
}

export default GameBoard;
