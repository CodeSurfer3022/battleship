function renderBoard(boardArray, boardDiv) {

    boardArray.forEach( (value, index = 0) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-key', index);
        boardDiv.appendChild(cell);
    })
}

export default renderBoard;