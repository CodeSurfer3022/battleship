import React from "react";
import "./Cell.css";

function Cell(props) {
  let status='';
  const {value, index, dragOver, dragEnter, dragLeave, dragDrop} = props;

  if(value === 'miss' || value === 'hit') {
    status = value;
  }

  return(
    <div className={`cell ${status}`}
         data-key={index}
         onDragOver={dragOver}
         onDragEnter={dragEnter}
         onDragLeave= {dragLeave}
         onDrop= {dragDrop}
    >

    </div>
  )

}

export default Cell;





