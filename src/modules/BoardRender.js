function renderBoard(player, board) {
    let selector;
    if(player === 'player') {
        selector = 'playerBoard';
    } else if (player === 'computer') {
        selector = 'computerBoard';
    }

    const container = document.querySelector('#' + selector);

    const displayBoard = document.createElement('div');
    displayBoard.classList.add('board');

    board.forEach(position => {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        if(typeof cell === 'number') {
            cell.classList.add('present');
        }

        displayBoard.appendChild(cell);
    })
    container.appendChild(displayBoard);

}

export default renderBoard;