import React, {useState, createContext} from 'react';
import {computer, player} from "./Players";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

const PlayersContext = createContext();

const PlayersProvider = (props) => {
  const [boardValues, setBoardValues] = useState(
    {
      [player.name]: initialValues,
      [computer.name]: initialValues
    })

  return(
    <PlayersContext.Provider value={[boardValues, setBoardValues]}>
      {props.children}
    </PlayersContext.Provider>
  )
}

export {PlayersContext, PlayersProvider}
