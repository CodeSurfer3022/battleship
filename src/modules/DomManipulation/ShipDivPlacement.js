function styleShip(ship, orientation, start, end) {
    if(orientation === 'vertical') {
        ship.setAttribute('data-top', start);
        ship.setAttribute('data-bottom', end);
    } else {
        ship.setAttribute('data-left', start);
        ship.setAttribute('data-right', end);
    }
    const topOffset = Math.floor(start/ 10);
    const leftOffset = start % 10;

    ship.style.top = `${topOffset * 42}px`;
    ship.style.left = `${leftOffset * 42}px`;
}

function makeShipDiv(orientation, shipNum, length) {
    const div = document.createElement('div');
    div.classList.add('ship');
    div.draggable = true;
    div.classList.add(orientation);
    div.setAttribute('data-ship', shipNum);
    div.setAttribute('data-length', length);
    if(orientation === 'vertical') {
        div.style.width = '40px';
        div.style.height = `${40 * length}px`;
    } else {
        div.style.height = '40px';
        div.style.width = `${40 * length}px`;
    }
    return div;
}

function placeShipDivs(container, shipNum, orientation, length, start, end) {
    const ship = makeShipDiv(orientation, shipNum, length);
    styleShip(ship, orientation, start, end);
    container.appendChild(ship);
}

export {styleShip, placeShipDivs};
