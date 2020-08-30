function Ship(length) {
    const sectionsHealth = []
    for(let i = 0; i < length; i ++) {
        sectionsHealth.push(1);
    }
    const hit = (point) => {
        sectionsHealth[point] = 0;
    }
    const isSunk = () => {
        return sectionsHealth.every(health => health === 0)
    }
    return {length, hit, isSunk};
}

export default Ship;