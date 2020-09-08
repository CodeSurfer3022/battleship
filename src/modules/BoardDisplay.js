function renderBoard(boardArray, board) {

    boardArray.forEach( (value, index = 0) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-key', index);
        board.appendChild(cell);
    })
}

export default renderBoard;