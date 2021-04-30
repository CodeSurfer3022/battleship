import React, {useState} from "react";
import "./PlayArea.css";

import GameBoardContainer from "./GameBoardContainer";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

function PlayArea(props) {
  const {player, computer} = props;
  const [boardValues, setBoardValues] = useState(
    {
      player: initialValues,
      computer: initialValues
    })

  return(
    <div className="play-area">
      <GameBoardContainer
        player={player.name}
        board={boardValues.player}
        ships={player.ships}
      />

      <GameBoardContainer
        player={computer.name}
        board={boardValues.computer}
        ships={computer.ships}
      />
    </div>
  )
}

export default PlayArea;
