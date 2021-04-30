// function validatePosition(direction, hit, position) {
//     // check if the position is on the board
//     if(position < 0 || position > 99) return undefined;
//
//     // check if on the same row, because rows are wrapped
//     if(direction === 'left' || direction === 'right') {
//         const hitRow = Math.floor(hit / 10);
//         const positionRow = Math.floor(position / 10);
//         if(hitRow !== positionRow) return undefined;
//     }
//
//     // check if position had already been attacked
//     let nextPosition = position
//     let cellValue = boardArray[nextPosition];
//     while(cellValue === 'miss' || cellValue === 'hit') {
//         nextPosition = getPositionBasedOnHit(position, direction);
//         cellValue = boardArray[nextPosition];
//     }
//     return nextPosition;
// }
//
// function getPositionBasedOnHit(hit, direction) {
//     let position;
//     switch (direction) {
//         case 'up':
//             position = hit - 10;
//             break;
//
//         case 'down':
//             position = hit + 10;
//             break;
//
//         case 'left':
//             position = hit - 1;
//             break;
//
//         case 'right':
//             position = hit + 1;
//     }
//     return validatePosition(direction, hit, position);
// }
//
function getRandomPosition(board) {
    let position = Math.floor(Math.random() * 100);
    while(board.isPositionHit(position)) {
        position = Math.floor(Math.random() * 100);
    }
    return position;
}
//
// let hit;
// let directions = ['up', 'down', 'left', 'right'];
//
// const updateHits = (position) => {
//     hit = position;
// }
//
// const updateMiss = () => {
//     if (!hit) return;
//     directions.shift();
//
//     // If we've checked in all directions, setup variables for next hit
//     if (directions.length === 0) {
//         hit = undefined;
//         directions = ['up', 'down', 'left', 'right'];
//     }
// }
//
const getComputerAttackPosition = (board) => {
    // if (hit) {
    //     console.log('inside ' + hit + directions);
    //
    //     // get a valid position i.e on board and on same column for vertical ships
    //     let position = getPositionBasedOnHit(hit, directions[0]);
    //     while (!position) {
    //         directions.shift();
    //         if (directions.length === 0) {
    //             hit = undefined;
    //             directions = ['up', 'down', 'left', 'right'];
    //             return getRandomPosition();
    //         }
    //         position = getPositionBasedOnHit(hit, directions[0]);
    //     }
    //     return position;
    // }
    return getRandomPosition(board);
}

export default getComputerAttackPosition;
