import React from "react";
import "./GameBoardContainer.css";
import GameBoard from "./GameBoard";
import ShipsStatus from "./ShipsStatus";

// Numbers for sidetabs
let numbers = [];
for(let i = 0; i < 10; i++) numbers.push(<div className="number">
  <p>{i}</p>
</div>);

function GameBoardContainer(props) {
  const {player, boardValues, ships, playRound, turn} = props;

  return(
    <div className="gameboard-container">
      <div className="flex">
        <div className="side-tab">
          {numbers}
        </div>
        <div>
          <GameBoard
            turn={turn}
            player={player}
            boardValues={boardValues}
            ships={ships}
            playRound={playRound}
          />
          <div className="bottom-tab">
            {numbers}
          </div>
        </div>
      </div>
      <div>
        <p>{player} board</p>
      </div>

      {/*<ShipsStatus />*/}
    </div>
  )
}

export default GameBoardContainer;
