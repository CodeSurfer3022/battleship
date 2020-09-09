import placeShipDivs from './ShipDivPlacement';

function isvalidPosition(unaivalablePositions ,position, size, orientation) {
    if(unaivalablePositions.includes(position)) return false;

    if(orientation === 'horizontal') {
        const row = Math.floor(position / 10);
        const end = (row + 1) * 10;

        // checking bounds
        if(position + size - 1 >= end) {
            return false
        }

        // check if all positions with this starting position are available
        for(let i = 0; i < size; i ++) {
            position ++;
            if(unaivalablePositions.includes(position)) return false;
        }

    } else {
        const col = position % 10;
        const end = col + 90;

        // checking bounds
        if(position + (size - 1) * 10 > end) {
            return false;
        }

        // check if all positions with this starting position are available
        for(let i = 0; i < size; i ++) {
            position += 10;
            if(unaivalablePositions.includes(position)) return false;
        }
    }
    return true;
}

function placeShipAndShipDivs(board, boardDiv, positions, index, orientation) {
    const length = positions.length;
    const start = positions[0];
    const end = positions[length - 1];
    placeShipDivs(boardDiv, `${index}`, orientation, length, start, end);

    board.placeShip(positions)
}

const shipPlacement = {
    randomPlacement(board, boardDiv) {
        const unavailablePositions = [];
        const ships = [];
        const orientations = [];

        // let's make 5 ships of sizes 1 to 5
        for(let size = 1; size <= 5; size ++) {
            if(size % 2) {
                orientations.push('vertical');
            } else {
                orientations.push('horizontal');
            }

            const orientation = orientations[size - 1];
            let position = Math.round(Math.random() * 100);
            while(!isvalidPosition(unavailablePositions, position, size, orientation))
            {
                position = Math.round(Math.random() * 100);
            }
            let ship = [];
            for(let i = 0; i < size; i ++) {
                ship.push(position);
                unavailablePositions.push(position);
                if(orientation === 'vertical') {
                    position += 10;
                } else {
                    position ++;
                }
            }
            ships.push(ship);
        }
        ships.forEach((ship, index= 0 )=> placeShipAndShipDivs(board, boardDiv, ship, index, orientations[index]));
    }
}

export default shipPlacement;