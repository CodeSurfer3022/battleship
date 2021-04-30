import React, {useState} from "react";
import GameBoardContainer from "./GameBoardContainer";
import "./PlayArea.css";
import makeShips from "../Helpers/makeShips";
import placeShipsOnBoard from "../Helpers/placeShipsOnBoard";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";

// make initial player ships and place them on board
let initialPlayerShips = makeShips();
let initialPlayerBoardCellValues = placeShipsOnBoard(initialPlayerShips);

// make initial ships and place them on board
let initialComputerShips = makeShips();
let initialComputerBoardCellValues = placeShipsOnBoard(initialComputerShips);

function PlayArea() {
  const [playerShips, setPlayerShips] = useState(initialPlayerShips);
  const [playerBoardCellValues, setPlayerBoardCellValues] = useState(initialPlayerBoardCellValues);

  console.log(playerShips, playerBoardCellValues);

  const [computerShips, setComputerShips] = useState(initialComputerShips);
  const [computerBoardCellValues, setComputerBoardCellValues] = useState(initialComputerBoardCellValues);

  console.log(computerShips, computerBoardCellValues);

  function areAllComputerShipsSunk() {
    return computerShips.every(ship => ship.isSunk());
  }

  function playerAttack(position) {
    console.log(position, computerBoardCellValues[position]);
    let newValues = computerBoardCellValues.slice();
    let newShips = computerShips.slice();

    let value = newValues[position];
    if(value === undefined) {
      newValues[position] = 'miss';

    } else if (newValues[position] !== 'miss' && newValues[position] !== 'hit'){
      const index = newValues[position];
      const hitShip = newShips[index];
      console.log(hitShip);
      hitShip.hit(position);
      newValues[position] = 'hit';
    }
    console.log(newValues);
    setComputerBoardCellValues(newValues);
    setComputerShips(newShips);
    console.log(areAllComputerShipsSunk());
  }

  function playRound(event) {
    let cell = event.target;
    let position = cell.getAttribute('data-key');
    // this is player's turn
    playerAttack(position);

    // then computer's turn
    position = getComputerAttackPosition(computerBoardCellValues);
    console.log(position);
    // attack(position);
  }

  return(
    <div className="play-area">
      <GameBoardContainer
        player="Player"
        boardCellValues={playerBoardCellValues}
        ships={playerShips}
        playRound={null}
      />

      <GameBoardContainer
        player="Computer"
        boardCellValues={computerBoardCellValues}
        ships={computerShips}
        playRound={playRound}
      />
    </div>
  )
}

export default PlayArea;
