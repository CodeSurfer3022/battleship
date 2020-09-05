function renderBoard(container, board) {

    const displayBoard = document.createElement('div');
    displayBoard.classList.add('board');

    board.forEach( (position, index = 0) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-key', index);
        if(typeof position === 'number') {
            cell.classList.add('present');
        }

        displayBoard.appendChild(cell);
    })
    container.appendChild(displayBoard);

}

export default renderBoard;