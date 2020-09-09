function placeShip(board, boardDiv, positions) {
    const length = positions.length;
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.style.position = "absolute";
    console.log(shipDiv);
    boardDiv.appendChild(shipDiv);
    board.placeShip(positions)
}

const shipPlacement = {
    randomPlacement(board, boardDiv) {
        const unavailablePositions = [];
        const ships = [];

        // let's make 5 ships of sizes 1 to 5
        for(let size = 1; size <= 5; size ++) {
            let position = Math.round(Math.random() * 100);
            while(unavailablePositions.includes(position)
                    || position + size - 1 > 100
                    || position + (size - 1) * 10 > 100 ) {
                position = Math.round(Math.random() * 100);
            }
            let positions = [];
            for(let i = 0; i < size; i ++) {
                positions.push(position);
                unavailablePositions.push(position);
                if(size % 2) {
                    position++;
                } else {
                    position += 10;
                }
            }
            ships.push(positions);
        }
        ships.forEach(ship => placeShip(board, boardDiv, ship))
    }
}

export default shipPlacement;