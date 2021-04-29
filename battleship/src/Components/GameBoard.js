import React, {useState, useEffect} from "react";
import "./GameBoard.css";
import Cell from "./Cell";
import makeShips from "../Helpers/makeShips";
import placeShipsOnBoard from "../Helpers/placeShipsOnBoard";

function GameBoard(props) {
  console.log(props.player)
  const [ships, setShips] = useState(makeShips());
  const [boardCellValues, setBoardCellValues] = useState([]);

  // component did mount, on first mount, place the ships on the board
  useEffect(() => {
    setBoardCellValues(placeShipsOnBoard(ships));
  }, []);

  console.log(ships, boardCellValues);

  function receiveAttack(position) {
    console.log(position);
    let newValues = boardCellValues.slice();

    let value = newValues[position];
    if(value === undefined) {
      newValues[position] = 'miss';
    } else if (newValues[position] !== 'miss' && newValues[position] !== 'hit'){
      const index = newValues[position];
      const hitShip = ships[index];
      console.log(hitShip);
      hitShip.hit(position);
      newValues[position] = 'hit';
    }
    setBoardCellValues(newValues);
  }


  const cells = boardCellValues.map((value, index = 0) =>
    <Cell key={index}
          value={value}
          index={index}
          receiveAttack={() => receiveAttack(index)}
    />);

  return(
    <div className={`game-board ${props.player}`}>
      <div className="board">
        {cells}
      </div>
      <p>{props.player} Board</p>
    </div>
  )
}

export default GameBoard;
