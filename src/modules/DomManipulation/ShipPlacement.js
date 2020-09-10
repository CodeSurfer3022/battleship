import placeShipDivs from './ShipDivPlacement';

function checkValidHorizontalPosition(unaivalablePositions, position, size) {
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

    return true;
}

function checkValidVerticalPosition(unaivalablePositions, position, size) {
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

    return true;
}

function isvalidPosition(unaivalablePositions ,position, size, orientation) {
    if(unaivalablePositions.includes(position)) return false;

    if(orientation === 'horizontal') {
        return checkValidHorizontalPosition(unaivalablePositions, position, size);
    } else {
        return checkValidVerticalPosition(unaivalablePositions, position, size);
    }
}

function getValidPosition(unavailablePositions, size, orientation) {
    let position = Math.round(Math.random() * 100);
    while(!isvalidPosition(unavailablePositions, position, size, orientation))
    {
        position = Math.round(Math.random() * 100);
    }
    return position;
}

function makeShips() {
    const unavailablePositions = [];
    const ships = [];
    const orientations = [];
    // let's make 5 ships of sizes 1 to 5
    for(let size = 1; size <= 5; size ++) {
        let orientation = size % 2 ? 'vertical' : 'horizontal';
        orientations.push(orientation);

        let ship = [];
        let position = getValidPosition(unavailablePositions, size, orientation);
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
    console.log(ships, orientations);
    return {ships, orientations};
}

const shipPlacement = {
    randomPlacement(board, boardDiv) {
        const {ships, orientations} = makeShips();
        ships.forEach((ship, index= 0 )=> {
            const length = ship.length;
            const start = ship[0];
            const end = ship[length - 1];
            placeShipDivs(boardDiv, `${index}`, orientations[index], length, start, end);
            board.placeShip(ship);
        });
    }
}

export default shipPlacement;