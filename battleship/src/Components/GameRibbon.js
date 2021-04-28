import React from "react";
import './GameRibbon.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

function GameRibbon() {
  return(
    <div className="game-ribbon">
      <button>Start</button>
      <button>Shuffle Ships</button>
      <FontAwesomeIcon icon={faInfoCircle}/>
      <p className="info__text hidden">You can move your ships around, note that the higlighted cell
        will be the ending position i.e bottom/right end of a ship</p>
    </div>
  )
}

export default GameRibbon;
