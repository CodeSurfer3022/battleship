function Player(name) {
    const attack = (opponent, position) => {
        opponent.board.receiveAttack(position);
    }
    return {name, attack}
}

module.exports = Player;
