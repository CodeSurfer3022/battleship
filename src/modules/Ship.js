function Ship(positions) {
    const positionsHealth = {};
    positions.forEach(position => positionsHealth[position] = 1);

    const hit = (position) => {
        positionsHealth[position] = 0;
    }
    const isSunk = () => {
        return positionsHealth.values.every(health => health === 0)
    }
    return {hit, isSunk};
}

export default Ship;