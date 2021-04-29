function Ship(positions) {
    const positionsHealth = {};
    positions.forEach(position => positionsHealth[position] = 1);

    const getPositions = () => positionsHealth;

    const hit = (position) => {
        positionsHealth[position] = 0;
    }

    const isSunk = () => {
        return Object.values(positionsHealth).every(health => health === 0)
    }

    return {hit, isSunk, getPositions};
}

module.exports = Ship;
