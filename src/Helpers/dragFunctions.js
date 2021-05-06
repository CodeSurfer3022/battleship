// Dragging functions
import {handleDrop} from "./ShipDivMovementHandler";

export default (function () {
  let ship;

  // drag start and end events are on ship divs
  function dragStart(event) {
    console.log('start');
    ship = event.target;
    setTimeout(() => ship.classList.add('hidden'), 0);
  }

  function dragEnd(event) {
    console.log('end');
    event.target.classList.remove('hidden');
  }

  //////////////////////////////////////////////////////////////////////////////////
  function dragOver(event) {
    console.log('over');
    event.preventDefault();
  }

  function dragEnter(event) {
    console.log('enter');
    event.target.classList.add('hovered');
  }

  function dragLeave(event) {
    console.log('leave');
    event.target.className = 'cell';
  }

  function dragDrop(event) {
    console.log('drop');
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    console.log(data);
    const cell = event.target;
    cell.className = 'cell';
    console.log(ship, cell);
    handleDrop(ship, cell);
  }

  return {dragStart, dragEnd, dragOver, dragEnter, dragLeave, dragDrop};
})();


