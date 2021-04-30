import React, {useState} from "react";
import "./GameBoard.css";
import Cell from "./Cell";
import makeShips from "../Helpers/makeShips";
import placeShipsOnBoard from "../Helpers/placeShipsOnBoard";
import Ship from "./Ship";
import getComputerAttackPosition from "../Helpers/getComputerAttackPosition";

// make initial ships and place them on board
let initialShips = makeShips();
let initialBoardCellValues = placeShipsOnBoard(initialShips);

function GameBoard(props) {
  console.log(props.player)

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

  const cells = boardCellValues.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
    />);

  // place ship divs on board only for player
  const shipDivs = props.player === 'Player' ?
    ships.map((ship, index) => <Ship
      key={index}
      index={index}
      ship={ship}/>) : null;

  return(
    <div className={`game-board ${props.player}`}>
      <div className="board" onClick={playRound}>
        {cells}
        {shipDivs}
      </div>
      <p>{props.player} Board</p>
    </div>
  )
}

export default GameBoard;
