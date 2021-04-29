import React from "react";
import "./Cell.css";

function Cell(props) {

  return(
    <div className="cell" data-key={props.index} onClick={props.receiveAttack}>

    </div>
  )
}

export default Cell;

