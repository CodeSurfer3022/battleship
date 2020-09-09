import placeShipDivs from './ShipPlacement';

function placeShipAndShipDivs(board, boardDiv, positions, index, orientation) {
    const length = positions.length;
    const start = positions[0];
    const end = positions[length - 1];
    console.log(index, orientation, length, start, end);
    placeShipDivs(boardDiv, `${index}`, orientation, length, start, end);

    // board.placeShip(positions)
}

const shipPlacement = {
    randomPlacement(board, boardDiv) {
        const unavailablePositions = [];
        const ships = [];
        const orientations = [];

        // let's make 5 ships of sizes 1 to 5
        for(let size = 1; size <= 5; size ++) {
            if(size % 2) {
                orientations.push('horizontal');
            } else {
                orientations.push('vertical');
            }
            let position = Math.round(Math.random() * 100);
            while(unavailablePositions.includes(position)
                    || position + size - 1 > 100
                    || position + (size - 1) * 10 > 100 ) {
                position = Math.round(Math.random() * 100);
            }
            let positions = [];
            for(let i = 0; i < size; i ++) {
                positions.push(position);
                unavailablePositions.push(position);
                if(size % 2) {
                    position++;
                } else {
                    position += 10;
                }
            }
            ships.push(positions);
        }
        console.log(ships, orientations);
        ships.forEach((ship, index= 0 )=> placeShipAndShipDivs(board, boardDiv, ship, index, orientations[index]));
    }
}

export default shipPlacement;