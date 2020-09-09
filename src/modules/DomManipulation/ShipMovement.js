import {selfBoardDiv} from '../../index';

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
    const boxNum = this.getAttribute('data-box');
    e.dataTransfer.setData("text", boxNum);
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
    const ship = selfBoardDiv.querySelector(`.ship[data-box='${data}']`);
    const cell = this;
    console.log(ship, cell);
    handleDrop(ship, cell);
}

function handleDrop(ship, cell) {
    const orientation = [...ship.classList].includes('horizontal') ? 'h' : 'v';
    const boxLength = ship.getAttribute('data-length');
    if(orientation === 'v') {
        const newBottom = cell.getAttribute('data-key');
        const newTop = newBottom - (boxLength - 1) * 10;
        if(newTop < 0) return;

        const newRow = Math.floor(newTop / 10);
        const newCol = newTop % 10;

        // box.setAttribute('data-top', `${newTop}`);
        // box.setAttribute('data-bottom', `${newBottom}`);
        console.log(newRow, newCol);
        placeBox(ship, newRow, newCol);
    } else {
        const newRight = cell.getAttribute('data-key');
        const newLeft = newRight - 1;
        if(newRight % 10 === 0) return;

        const newRow = Math.floor(newLeft / 10);
        const newCol = newLeft % 10;

        // box.setAttribute('data-left', `${newLeft}`);
        // box.setAttribute('data-right', `${newRight}`);
        placeBox(ship, newRow, newCol);
    }
}

function placeBox(ship, topOffset, leftOffset) {
    console.log(ship, topOffset, leftOffset);
    ship.style.top = `${topOffset * 42}px`;
    ship.style.left = `${leftOffset * 42}px`;
    console.log(ship);
}

export default addDragEventListeners;