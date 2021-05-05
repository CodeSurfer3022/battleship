import React from "react";
import './GameRibbon.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

function GameRibbon(props) {
  const {turn, opponent, winner, attackResult} = props;
  const resultMsg = attackResult ? attackResult ? "hit" : "miss" : '';
  const msgP = resultMsg !== '' ?<p>{turn.name === 'Player' ? 'You' : turn.name} shoot into {opponent.name}'s water and {resultMsg}</p> : null;


  const banner = winner ? <div className="banner">
    <h2>{winner.name} won</h2>
  </div> :  <div className="banner">
    <h2>{turn.name}'s Turn</h2>
  </div>;

  return(
    <div className="game-ribbon">
      {/*<button>Start</button>*/}
      {/*<button>Shuffle Ships</button>*/}
      {/*<FontAwesomeIcon icon={faInfoCircle}/>*/}
      {/*<p className="info__text hidden">You can move your ships around, note that the higlighted cell*/}
      {/*  will be the ending position i.e bottom/right end of a ship</p>*/}

      {banner}
    </div>
  )
}

export default GameRibbon;
