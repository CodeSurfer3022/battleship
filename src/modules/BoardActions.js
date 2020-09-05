const actionHandler = {
    attack(player, computerBoard, cell){
        const position = cell.getAttribute('data-key');
        player.attack(computerBoard, position);
        const result = computerBoard.board[position];
        if (result === 'miss') {
            cell.classList.add('miss');
        } else if (result === 'hit'){
            cell.classList.add('hit');
        }
    }
}

export default actionHandler;