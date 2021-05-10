import React, {createContext} from 'react';
import {computer, player} from "./Players";

// The board initially has no ships, so initialize to undefined
let initialValues = [];
for(let i = 0; i < 100; i ++) initialValues.push(undefined);

// The initial turn is of player
let turn = player;

const PlayersContext = createContext();

const PlayerProvider = (props) => {
  const [boardValues, setBoardValues] = useState(
    {
      [player.name]: initialValues,
      [computer.name]: initialValues
    })

  return(
    <PlayersContext.Provider>{props.children}</PlayersContext.Provider>
  )
}

