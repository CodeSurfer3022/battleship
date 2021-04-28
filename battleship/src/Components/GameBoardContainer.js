import React from "react";
import "./GameBoardContainer.css";

import GameBoard from "./GameBoard";
import ShipsStatus from "./ShipsStatus";

function GameBoardContainer() {
  return(
    <div className="gameboard-container">
      <GameBoard />
      <ShipsStatus />
    </div>
  )
}

export default GameBoardContainer;
