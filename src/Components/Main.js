import React from "react";
import './Main.css';

import GameRibbon from "./GameRibbon";
import PlayArea from "./PlayArea";
import computerAttack from "../Helpers/computerAttack";
import {PlayersContext} from "../PlayersContext";


// console.log(computer.ships.forEach(ship => console.log(ship.positions)));

function Main(props) {

  return(
    <main>
      {/*<GameRibbon turn={turn}*/}
      {/*            opponent={turn === player ? computer: player}*/}
      {/*            winner={winner}*/}
      {/*            attackResult={attackResult}*/}
      {/*/>*/}
      <PlayArea/>
    </main>
  )
}

export default Main;
