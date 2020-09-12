import {selfBoard} from '../index';

function validatePosition(direction, hit, position) {
    // check if the position is on the board
    if(position < 0 || position > 99) return undefined;

    // check if on the same row, because rows are wrapped
    if(direction === 'left' || direction === 'right') {
        const hitRow = Math.floor(hit / 10);
        const positionRow = Math.floor(position / 10);
        if(hitRow !== positionRow) return undefined;
    }
    return position;
}

function getNextPositionInDirection(hit, direction) {
    switch (direction) {
        case 'up':
            return hit - 10;
        case 'down':
            return hit + 10;
        case 'left':
            return hit - 1;
        case 'right':
            return hit + 1;
    }
}

function getPositionBasedOnHit(hit, direction) {
    let position = getNextPositionInDirection(hit, direction)

    return validatePosition(direction, hit, position);
}

function getRandomPosition() {
    let position = Math.floor(Math.random() * 100);
    let cellValue = selfBoard.boardArray[position];
    while(cellValue === 'miss' || cellValue === 'hit') {
        position = Math.floor(Math.random() * 100);
        cellValue = selfBoard.boardArray[position];
    }
    return position;
}

function ComputerAttack() {
    let hit;
    let directions = ['up', 'down', 'left', 'right'];

    const updateHits = (position) => {
        hit = position;
    }

    const updateMiss = () => {
        if(!hit) return;
        directions.shift();

        // If we've checked in all directions, setup variables for next hit
        if(directions.length === 0) {
            hit = undefined;
            directions = ['up', 'down', 'left', 'right'];
        }
    }

    const getComputerAttackPosition = () => {
        if(hit) {
            console.log('inside ' + hit + directions);
            let position =  getPositionBasedOnHit(hit, directions[0]);
            while (!position) {
                directions.shift();
                position = getPositionBasedOnHit(hit, directions[0]);
            }
            return position;
        }
        return getRandomPosition();
    }

    return {getComputerAttackPosition, updateMiss, updateHits};
}

export default ComputerAttack;