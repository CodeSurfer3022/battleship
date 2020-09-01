function Ship(positions) {
    const positionsHealth = {};
    positions.forEach(position => positionsHealth[position] = 1);

    const hit = (position) => {
        positionsHealth[position] = 0;
    }
    const isSunk = () => {
        console.log('in here');
        return Object.values(positionsHealth).every(health => health === 0)
    }
    return {hit, isSunk};
}

module.exports = Ship;