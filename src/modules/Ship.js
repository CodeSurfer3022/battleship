function Ship(length) {
    const bodyHealth = []
    for(let i = 0; i < length; i ++) {
        bodyHealth.push(1);
    }
    const hit = (point) => {
        bodyHealth[point] = 0;
    }
    const isSunk = () => {
        return bodyHealth.every(health => health === 0)
    }
    return {length, hit, isSunk};
}

module.exports = Ship;