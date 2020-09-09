const Ship = require('../modules/Factories/Ship');

test('returns ship object', () => {
    expect(Object.keys(Ship([10])).sort()).toEqual(['hit', 'isSunk']);
})