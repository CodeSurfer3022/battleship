import Board from "../Factories/Board";
import Ship from "../Factories/Ship";

let tmpBoard = Board();

let ship1 = Ship([1, 11], 'vertical');
let ship2 = Ship([21, 31, 41, 51], 'vertical');
let ship3 = Ship([5,6,7], 'horizontal');

const ships = [ship1, ship2, ship3];

test('board is initially all undefined', () => {
  expect(tmpBoard.boardValues.every(val => !val)).toBe(true);
});

test('Board shows positions where ships are placed', () => {
  expect(tmpBoard.boardValues.every(val => !val)).toBe(true);
});

test('places all ships', () => {
  tmpBoard.placeAllShips(ships)
  expect(tmpBoard.ships).toEqual(ships);
})

test('receive attack attacks position', () => {
  tmpBoard.receiveAttack(1);
  expect(tmpBoard.boardValues[1]).toBeDefined()
})

test('position is attacked', () => {
  tmpBoard.receiveAttack(11);
  expect(tmpBoard.isPositionAttacked(11)).toBe(true);
})


test('position is hit', () => {
  tmpBoard.receiveAttack(21);
  expect(tmpBoard.isPositionHit(21)).toBe(true);
})

test('position is missed', () => {
  tmpBoard.receiveAttack(22);
  expect(tmpBoard.isPositionMiss(22)).toBe(true);
})

test('all ships are sunk', () => {
  tmpBoard.receiveAttack(31);
  tmpBoard.receiveAttack(41);
  tmpBoard.receiveAttack(51);
  tmpBoard.receiveAttack(5);
  tmpBoard.receiveAttack(6);
  tmpBoard.receiveAttack(7);
  console.log(tmpBoard.ships);
  expect(tmpBoard.areAllShipsSunk(90)).toBe(true);
})

