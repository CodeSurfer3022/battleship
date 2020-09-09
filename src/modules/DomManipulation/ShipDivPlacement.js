function placeShipDivs(container, boxNum, orientation, length, start, end) {
    const div = document.createElement('div');
    div.setAttribute('data-box', boxNum);
    div.classList.add('ship');
    div.classList.add(orientation);
    div.draggable = true;

    div.setAttribute('data-length', length);

    let topOffset, leftOffset;
    if(orientation === 'vertical') {
        div.setAttribute('data-top', start);
        div.setAttribute('data-bottom', end);

        div.style.width = '40px';
        div.style.height = `${40 * length}px`;

        topOffset = Math.floor(start/ 10);
        leftOffset = start % 10;
    } else {
        div.setAttribute('data-left', start);
        div.setAttribute('data-right', end);

        div.style.height = '40px';
        div.style.width = `${40 * length}px`

        topOffset = Math.floor(start/ 10);
        leftOffset = start % 10;
    }
    console.log(div);
    container.appendChild(div);

    div.style.top = `${topOffset * 42}px`;
    div.style.left = `${leftOffset * 42}px`;
}

export default placeShipDivs;
