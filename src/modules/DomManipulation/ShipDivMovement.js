import {selfBoard, selfBoardDiv} from '../../index';
import {getPositionsFromShipDiv, getStartFromDiv, moveShipDiv} from './ShipDivMovementHandler';

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

    // get start and positions
    const oldStart = getStartFromDiv(ship, orientation);
    const oldPositions = getPositionsFromShipDiv(orientation, length, +oldStart);

    moveShipDiv(ship, cell, orientation, length);

    // get start and positions
    const newStart = getStartFromDiv(ship, orientation);
    const newPositions = getPositionsFromShipDiv(orientation, length, +newStart);

    const shipIndex = ship.getAttribute('data-ship');
    console.log(shipIndex, oldPositions, newPositions);
    // selfBoard.updateShip(shipIndex, oldPositions, newPositions);
}

export default addDragEventListeners;