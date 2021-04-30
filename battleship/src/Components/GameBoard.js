import React from "react";
import "./GameBoard.css";
import Cell from "./Cell";
import Ship from "./Ship";

function GameBoard(props) {
  const cells = props.boardCellValues.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
    />);

  // place ship divs on board only for player
  const shipDivs = props.player === 'Player' ?
    props.ships.map((ship, index) => <Ship
      key={index}
      index={index}
      ship={ship}/>) : null;

  return(
    <div className={`game-board ${props.player}`}>
      <div className="board" onClick={props.playRound}>
        {cells}
        {shipDivs}
      </div>
      <p>{props.player} Board</p>
    </div>
  )
}

export default GameBoard;
