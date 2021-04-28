import React from "react";
import GameBoardContainer from "./GameBoardContainer";

import "./PlayArea.css";

function PlayArea() {
  return(
    <div className="play-area">
      <GameBoardContainer />
      <GameBoardContainer />
    </div>
  )
}

export default PlayArea;
