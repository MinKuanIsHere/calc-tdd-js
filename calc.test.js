const Calc = require('./calc');

test('adds 1 + 2 to equal 3', () => {
  const calc = new Calc();
  expect(calc.add(1, 2)).toBe(3);
});
