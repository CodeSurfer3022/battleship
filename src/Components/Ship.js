import React from "react";
import "./Ship.css";

import {styleShip} from "../Helpers/styleShip";

function Ship(props){
  const {positions,length, orientation} = props.ship;
  const {dragStart, dragEnd} = props;

  const start = positions[0];
  const end = positions[length - 1];

  const style = styleShip(start, orientation, length);

  return(
    <div className={`ship ${orientation}`}
         data-ship={props.index}
         data-length={length}
         data-start={start}
         data-end={end}
         style={style}
         draggable="true"
         onDragStart={dragStart}
         onDragEnd={dragEnd}
    >

    </div>
  )
}

export default Ship;
