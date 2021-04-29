import React, {useState, useEffect} from "react";
import "./GameBoard.css";
import Cell from "./Cell";

function GameBoard(props) {
  // Initialise all cells to have value as undefined i.e no ship
  let tmp = [];
  for(let i = 0; i < 100; i ++) {
    tmp.push(undefined);
  }

  const [values, setValues] = useState(tmp);
  const [ships, setShips] = useState([])
  // const [positions, setPositions] = useState([]);

  // component did mount
  // place ships at valid positions
  useEffect(() => {
    ships.forEach((ship, index) => {
      ship.forEach(position => {
        console.log(position, index);
        tmp[position] = index;
      });
    });
    setValues(tmp);
  }, []);

  const cells = values.map( (value, index = 0) => <Cell key={index} index={index}/>);

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
