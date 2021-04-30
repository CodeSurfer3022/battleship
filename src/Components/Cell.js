import React from "react";
import "./Cell.css";

function Cell(props) {
  let status='';
  if(props.value === 'miss' || props.value === 'hit') {
    status = props.value;
  }

  return(
    <div className={`cell ${status}`} data-key={props.index}>

    </div>
  )
}

export default Cell;

