import {styleShip} from './ShipDivPlacement';

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

function getStartFromDiv(ship, orientation) {
    let start;
    if(orientation === 'vertical') {
        start = parseInt(ship.getAttribute('data-top'));
    } else {
        start = parseInt(ship.getAttribute('data-left'));
    }
    return start;
}

function getPositionsFromShipDiv(orientation, length, start) {
    const positions = [];
    let position = start;

    const increment = orientation === 'vertical' ? 10 : 1;

    for(let i = 0; i < length; i ++) {
        positions.push(position);
        position += increment;
    }
    return positions;
}

export  {moveShipDiv, getPositionsFromShipDiv, getStartFromDiv};