import React from "react";
import "./ShipsStatus.css";
import ShipHealth from "./ShipHealth";

function ShipsStatus() {

  const ships = [{length:1}, {length:2}, {length:3}, {length:4}, {length:5}];

  const shipHealths = ships.map((ship, index) => <ShipHealth key={index} length={ship.length}/>);

  return(
    <div className="ships-status">
      {shipHealths}
    </div>
  )
}

export default ShipsStatus;
