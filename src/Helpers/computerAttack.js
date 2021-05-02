function isValidPosition(hit, direction, position) {
    // check if the position is on the board
    if(position < 0 || position > 99) return;

    // check if on the same row, because rows are wrapped
    if(direction === 'left' || direction === 'right') {
        const hitRow = Math.floor(hit / 10);
        const positionRow = Math.floor(position / 10);
        if(hitRow !== positionRow) return;
    }

    return true;
}

function getPositionBasedOnHit(hit, direction, board) {
    let position;
    switch (direction) {
        case 'up':
            position = hit - 10;
            break;

        case 'down':
            position = hit + 10;
            break;

        case 'left':
            position = hit - 1;
            break;

        case 'right':
            position = hit + 1;
    }

    console.log(position);
    if (isValidPosition(hit, direction, position)) {
        // check if position has already been hit, if so, it means
        //  we are starting to traverse back on the ship towards
        // the initial hit position, we need to cross all the way back
        // to the initial position and cross further to see if we got
        // all of the ship
        while(board.isPositionHit(position)) {
            position = getPositionBasedOnHit(position, direction, board);
        }

        // We previously attacked a possition adjacent to ship that missed
        // We need to update this miss now, so we don't travel in that direction
        if(board.isPositionMiss(position)) {
            return;
        }
        return position;
    }
}


function getRandomPosition(board) {
    let position = Math.floor(Math.random() * 100);
    while(board.isPositionAttacked(position)) {
        position = Math.floor(Math.random() * 100);
    }
    return position;
}


const computerAttack = (() => {
    let hit;
    let directions = ['up', 'down', 'left', 'right'];

    const updateHits = (position) => {
        hit = position;
    }

    const updateMiss = () => {
        // A miss is irrelevant if there was no hit just before
        if (!hit) return;

        // If there is a miss, it means we tried one of the directions
        // right after a hit and missed, so we need to check other directions
        directions.shift();

        // If we've checked in all directions, it means we got all of the ship
        // reset variables for next hit
        if (directions.length === 0) {
            hit = undefined;
            directions = ['up', 'down', 'left', 'right'];
        }
    }

    const getAttackPosition = (board) => {
        if (hit) {
            console.log('inside ' + hit + directions);

            // get a valid position i.e on board and on same column for
            // vertical ships, same row for horizontal ships
            let position = getPositionBasedOnHit(hit, directions[0], board);

            // If there is no valid position in this direction, check
            // next direction
            while (!position) {
                directions.shift();
                if (directions.length === 0) {
                    hit = undefined;
                    directions = ['up', 'down', 'left', 'right'];
                    return getRandomPosition(board);
                }
                position = getPositionBasedOnHit(hit, directions[0], board);
            }
            return position;
        }
        return getRandomPosition(board);
    }
    return {getAttackPosition, updateMiss, updateHits}
})()

export default computerAttack;
