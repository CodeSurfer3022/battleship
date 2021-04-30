function Player(name) {
    const attack = (board, position) => {
        board.receiveAttack(position);
    }
    return {name, attack}
}

module.exports = Player;
