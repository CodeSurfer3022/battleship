import {selfBoard, selfBoardDiv} from '../../index';
import {areValidPositions, getPositionsFromShipDiv, moveShipDiv} from './ShipDivMovementHandler';

function addDragEventListeners() {
    const ships = selfBoardDiv.querySelectorAll('.ship');
    const cells = selfBoardDiv.querySelectorAll('.cell');
    // draggable event listeners
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart));
    ships.forEach(ship => ship.addEventListener('dragend', dragEnd));

    // cell event listeners
    cells.forEach(cell => cell.addEventListener('dragover', dragOver));
    cells.forEach(cell => cell.addEventListener('dragenter', dragEnter));
    cells.forEach(cell => cell.addEventListener('dragleave', dragLeave));
    cells.forEach(cell => cell.addEventListener('drop', dragDrop));
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

// Dragging functions

function dragStart(e) {
    console.log('start');
    const shipNum = this.getAttribute('data-ship');
    e.dataTransfer.setData("text", shipNum);
    setTimeout(() => this.classList.add('hidden'), 0);
}

function dragEnd() {
    console.log('end');
    this.classList.remove('hidden');
}

function dragOver(e) {
    console.log('over');
    e.preventDefault();
}

function dragEnter() {
    console.log('enter');
    this.classList.add('hovered');
}

function dragLeave() {
    console.log('leave');
    this.className = 'cell';
}

function dragDrop(e) {
    console.log('drop');
    e.preventDefault();
    console.log(e);
    const data = e.dataTransfer.getData("text");
    console.log(data);
    this.className = 'cell';
    const ship = selfBoardDiv.querySelector(`.ship[data-ship='${data}']`);
    const cell = this;
    console.log(ship, cell);
    handleDrop(ship, cell);
}

function handleDrop(ship, cell) {
    // move the div
    const orientation = [...ship.classList].includes('horizontal') ? 'horizontal' : 'vertical';
    const length = ship.getAttribute('data-length');

    // get old end and positions
    const oldEnd = orientation === 'horizontal' ?
        parseInt(ship.getAttribute('data-right'))
        : parseInt(ship.getAttribute('data-bottom'));
    const oldPositions = getPositionsFromShipDiv(orientation, length, oldEnd);
    console.log(oldEnd, oldPositions);

    // check if moving this div will cause any of the positions to overlap
    const newEnd = parseInt(cell.getAttribute('data-key'));
    const newPositions = getPositionsFromShipDiv(orientation, length, newEnd);

    if(!areValidPositions(newPositions, oldPositions)) return;
    console.log(newEnd, newPositions);

    moveShipDiv(ship, cell, orientation, length);

    const shipIndex = parseInt(ship.getAttribute('data-ship'));
    console.log(shipIndex, oldPositions, newPositions);
    selfBoard.updateShip(shipIndex, oldPositions, newPositions);
}

export {addDragEventListeners, removeDragEventListeners};
