const GameBoard = require('../modules/Factories/GameBoard');

test('returns an object', () => {
    expect(typeof GameBoard()).toEqual("object")
})

