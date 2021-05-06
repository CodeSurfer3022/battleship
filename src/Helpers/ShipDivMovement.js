import {areValidPositions, getPositionsFromShipDiv, moveShipDiv} from './ShipDivMovementHandler';

// draggable event listeners
function shipDivListeners() {
    const shipDivs = selfBoardDiv.querySelectorAll('.ship');
    shipDivs.forEach(ship => ship.addEventListener('dragstart', dragStart));
    shipDivs.forEach(ship => ship.addEventListener('dragend', dragEnd));
}

// cell event listeners
function cellListeners() {
    const cells = selfBoardDiv.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('dragover', dragOver));
    cells.forEach(cell => cell.addEventListener('dragenter', dragEnter));
    cells.forEach(cell => cell.addEventListener('dragleave', dragLeave));
    cells.forEach(cell => cell.addEventListener('drop', dragDrop));
}

function addDragEventListeners() {
    shipDivListeners();
    cellListeners();
}

function removeDragEventListeners() {
    const ships = selfBoardDiv.querySelectorAll('.ship');
    const cells = selfBoardDiv.querySelectorAll('.cell');
    // draggable event listeners
    ships.forEach(ship => ship.removeEventListener('dragstart', dragStart));
    ships.forEach(ship => ship.removeEventListener('dragend', dragEnd));

    // cell event listeners
    cells.forEach(cell => cell.removeEventListener('dragover', dragOver));
    cells.forEach(cell => cell.removeEventListener('dragenter', dragEnter));
    cells.forEach(cell => cell.removeEventListener('dragleave', dragLeave));
    cells.forEach(cell => cell.removeEventListener('drop', dragDrop));
}





export {addDragEventListeners, removeDragEventListeners, shipDivListeners};
