function Player() {
    const attack = (board, position) => {
        board.receiveAttack(position);
    }
    return {attack}
}

module.exports = Player;
