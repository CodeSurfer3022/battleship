function Ship(positions, orientation) {
    const positionsHealth = {};
    const length = positions.length;
    positions.forEach(position => positionsHealth[position] = 1);

    const getPositions = () => positions;
    const getOrientation = () => orientation;
    const getLength = () => length;

    const getPositionsHealth = () => positionsHealth;

    const hit = (position) => {
        positionsHealth[position] = 0;
    }
    const isSunk = () => {
        return Object.values(positionsHealth).every(health => health === 0)
    }
    return {hit, isSunk, getPositions, getOrientation, getPositionsHealth, getLength,
        positions, orientation, length, positionsHealth};
}

module.exports = Ship;
