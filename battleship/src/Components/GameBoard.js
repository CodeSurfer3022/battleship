import React, {useState, useEffect} from "react";
import "./GameBoard.css";
import Cell from "./Cell";

function GameBoard() {
  const [values, setValues] = useState([]);
  const [positions, setPositions] = useState([]);

  // component did mount
  useEffect(() => {
    let tmp = [];
    for(let i = 0; i < 100; i ++) {
      tmp.push(undefined);
    }
    setValues(tmp);
  }, []);

  const cells = values.map( (value, index = 0) => <Cell key={index} index={index}/>);

  return(
    <div className="game-board">
      <div className="board">
        {cells}
      </div>
      <p>Player</p>
    </div>
  )
}

export default GameBoard;
