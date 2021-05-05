import Player from "../Factories/Player";
import Ship from "../Factories/Ship";
import Board from "../Factories/Board";

let tmp = Player('Player');
let tmpBoard = Board();
tmp.board = tmpBoard;

let cmp = Player('Computer');
let cmpBoard = Board();
cmp.board = cmpBoard;

test('returns an object', () => {
  expect(typeof(tmp)).toBe('object');
});

test('player attacks opponent', () => {
  tmp.attack(cmp, 10);
  expect(cmpBoard.isPositionAttacked(10)).toBe(true);
})

