import React from "react";
import "./GameBoardContainer.css";

import GameBoard from "./GameBoard";
import ShipsStatus from "./ShipsStatus";

function GameBoardContainer(props) {
  return(
    <div className="gameboard-container">
      <GameBoard player={props.player}/>
      <ShipsStatus />
    </div>
  )
}

export default GameBoardContainer;
