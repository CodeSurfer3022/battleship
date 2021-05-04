import Ship from "../Factories/Ship";

let tmp = Ship([1,2], 'vertical');

test('returns an object', () => {
  expect(typeof(tmp)).toBe('object');
});

test('accepts a hit', () => {
  tmp.hit(1);
  expect(tmp.getPositionsHealth()[1]).toBe(0);
})

test('ship is not sunk', () => {
  expect(tmp.isSunk()).toBe(false);
})

test('ship is sunk', () => {
  tmp.hit(2);
  expect(tmp.isSunk()).toBe(true);
})
