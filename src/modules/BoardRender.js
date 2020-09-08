function renderBoard(boardArray, board) {

    console.log(board, boardArray);
    boardArray.forEach( (value, index = 0) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-key', index);
        if(typeof value === 'number') {
            cell.classList.add('present');
        }
        board.appendChild(cell);
    })
}

export default renderBoard;