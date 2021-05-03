import Ship from "../Factories/Ship";

test('returns an object', () => {
  expect(typeof(Ship([], {}))).toBe('object');
})
