function positionShip(ship, start) {
    const topOffset = Math.floor(start/ 10);
    const leftOffset = start % 10;

    ship.style.top = `${topOffset * 42}px`;
    ship.style.left = `${leftOffset * 42}px`;
}

function styleShip(ship, orientation, length, start, end) {
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
}

function makeShipDiv() {
    const div = document.createElement('div');
    div.classList.add('ship');
    div.draggable = true;
    return div;
}

function placeShipDivs(container, boxNum, orientation, length, start, end) {
    const ship = makeShipDiv();

    ship.classList.add(orientation);
    ship.setAttribute('data-box', boxNum);
    ship.setAttribute('data-length', length);

    styleShip(ship, orientation, length, start, end);
    positionShip(ship, start);
    console.log(ship);
    container.appendChild(ship);
}

export default placeShipDivs;
