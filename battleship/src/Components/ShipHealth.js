import React from "react";
import ShipSection from "./ShipSection";
import "./ShipHealth.css";

function ShipHealth(props) {

  const vals = [...Array(props.length).keys()];
  const shipSections = vals.map((val, index) => <ShipSection key={index}/>);

  return(
    <div className="ship-health">
      {shipSections}
    </div>
  )
}

export default ShipHealth;
