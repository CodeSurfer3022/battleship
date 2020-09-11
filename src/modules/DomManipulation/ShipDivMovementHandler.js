import {styleShip} from './ShipDivPlacement';
import {selfBoard} from '../../index';

function moveShipDiv(ship, cell, orientation, length) {
    if(orientation === 'vertical') {
        const newBottom = cell.getAttribute('data-key');
        const newTop = newBottom - (length - 1) * 10;
        if(newTop < 0) return;

        styleShip(ship, 'vertical', newTop, newBottom);
    } else {
        const newRight = cell.getAttribute('data-key');
        const row = Math.floor(newRight / 10);
        const newLeft = newRight - (length - 1);
        if(newLeft < row * 10) return;

        styleShip(ship, 'horizontal', newLeft, newRight);
    }
}

function getPositionsFromShipDiv(orientation, length, end) {
    const positions = [];
    let position = end;

    const decrement = orientation === 'vertical' ? 10 : 1;

    for(let i = 0; i < length; i ++) {
        positions.push(position);
        position -= decrement;
    }
    return positions;
}

function areValidPositions(positions) {
    return positions.every(position => selfBoard.boardArray[position] === undefined);
}

export  {moveShipDiv, getPositionsFromShipDiv, areValidPositions};