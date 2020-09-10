function makeShipDiv() {
    const div = document.createElement('div');
    div.classList.add('ship');
    div.draggable = true;
    return div;
}

function positionShip(ship, start) {
    const topOffset = Math.floor(start/ 10);
    const leftOffset = start % 10;

    ship.style.top = `${topOffset * 42}px`;
    ship.style.left = `${leftOffset * 42}px`;
}

function placeShipDivs(container, boxNum, orientation, length, start, end) {
    const ship = makeShipDiv();

    ship.classList.add(orientation);
    ship.setAttribute('data-box', boxNum);
    ship.setAttribute('data-length', length);

    let topOffset, leftOffset;
    if(orientation === 'vertical') {
        ship.setAttribute('data-top', start);
        ship.setAttribute('data-bottom', end);

        ship.style.width = '40px';
        ship.style.height = `${40 * length}px`;
    } else {
        ship.setAttribute('data-left', start);
        ship.setAttribute('data-right', end);

        ship.style.height = '40px';
        ship.style.width = `${40 * length}px`
    }
    positionShip(ship, start);
    console.log(ship);
    container.appendChild(ship);
}

export default placeShipDivs;
