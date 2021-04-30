import React, {useState} from "react";
import "./GameBoardContainer.css";
import GameBoard from "./GameBoard";
import ShipsStatus from "./ShipsStatus";
import makeShips from "../Helpers/makeShips";
import placeShipsOnBoard from "../Helpers/placeShipsOnBoard";

// make initial ships and place them on board
let initialShips = makeShips();
let initialBoardCellValues = placeShipsOnBoard(initialShips);

function GameBoardContainer(props) {

  const [ships, setShips] = useState(initialShips);
  const [boardCellValues, setBoardCellValues] = useState(initialBoardCellValues);

  console.log(ships, boardCellValues);

  function attack(position) {
    console.log(position, boardCellValues[position]);
    let newValues = boardCellValues.slice();
    let newShips = ships.slice();

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
    setBoardCellValues(newValues);
    setShips(newShips);
    console.log(areAllShipsSunk());
  }

  function playRound(event) {
    let cell = event.target;
    let position = cell.getAttribute('data-key');
    // this is player's turn
    attack(position);

    // then computer's turn
    // position = getComputerAttackPosition(boardCellValues);
    // attack(position);
  }

  function areAllShipsSunk() {
    return ships.every(ship => ship.isSunk());
  }

  return(
    <div className="gameboard-container">
      <GameBoard
        player={props.player}
        boardCellValues={boardCellValues}
        ships={ships}
        playRound={props.player === 'Computer'? playRound : null}
      />
      <ShipsStatus />
    </div>
  )
}

export default GameBoardContainer;
