import React, {useState} from "react";
import "./PlayArea.css";

import GameBoardContainer from "./GameBoardContainer";
import Board from "../Factories/Board";
import Player from "../Factories/Player";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";
import makeShips from "../Helpers/makeShips";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

// create Players to access attack functionality
let player = Player('Player');
let computer = Player('Computer');

// make boards for players
let playerBoard = Board();
let computerBoard = Board();

// make ships for players
let playerShips = makeShips();
let computerShips = makeShips();

// place ships on the respective player's board
playerBoard.placeAllShips(playerShips);
computerBoard.placeAllShips(computerShips);

function PlayArea() {
  const [playerBoardValues, setPlayerBoardValues] = useState(initialValues);
  const [computerBoardValues, setComputerBoardValues] = useState(initialValues);

  return(
    <div className="play-area">
      <GameBoardContainer
        player={player.name}
        board={playerBoardValues}
        ships={playerShips}
      />

      <GameBoardContainer
        player={computer.name}
        board={computerBoardValues}
        ships={computerShips}
      />
    </div>
  )
}

export default PlayArea;
