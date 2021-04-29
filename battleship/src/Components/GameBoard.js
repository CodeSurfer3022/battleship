import React, {useState} from "react";
import "./GameBoard.css";
import Cell from "./Cell";
import makeShips from "../Helpers/makeShips";
import placeShipsOnBoard from "../Helpers/placeShipsOnBoard";

function GameBoard(props) {
  const [ships, setShips] = useState(makeShips());
  const [boardCellValues, setBoardCellValues] = useState(placeShipsOnBoard(ships));

  console.log(ships, boardCellValues);

  const cells = boardCellValues.map( (value, index = 0) => <Cell key={index}
                                                                      value={value}
                                                                      index={index}
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
