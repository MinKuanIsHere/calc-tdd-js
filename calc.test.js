const Calc = require('./calc');

describe('Calc.add() Success Cases', () => {
  const cases = [
    { param: [1.2, 3.4], expected: 4.6 },
    { param: [-1.5, 2.5], expected: 1.0 },
    { param: [0, 0], expected: 0.0 },
  ];
  for (const { param, expected } of cases) {
    test(`add(${param.join(', ')}) = ${expected}`, () => {
      const calc = new Calc();
      expect(calc.add(...param)).toBeCloseTo(expected);
    });
  }
});

describe('Calc.subtract() Success Cases', () => {
  const cases = [
    { param: [5.5, 2.0], expected: 3.5 },
    { param: [-4.0, -1.0], expected: -3.0 },
    { param: [0, 0], expected: 0.0 },
  ];
  for (const { param, expected } of cases) {
    test(`subtract(${param.join(', ')}) = ${expected}`, () => {
      const calc = new Calc();
      expect(calc.subtract(...param)).toBeCloseTo(expected);
    });
  }
});

describe('Calc.multiply() Success Cases', () => {
  const cases = [
    { param: [2.5, 4], expected: 10.0 },
    { param: [-3, 2], expected: -6.0 },
    { param: [0, 999], expected: 0.0 },
  ];
  for (const { param, expected } of cases) {
    test(`multiply(${param.join(', ')}) = ${expected}`, () => {
      const calc = new Calc();
      expect(calc.multiply(...param)).toBeCloseTo(expected);
    });
  }
});

describe('Calc.divide() Success Cases', () => {
  const cases = [
    { param: [6, 3], expected: 2.0 },
    { param: [5, 2], expected: 2.5 },
    { param: [-8, 2], expected: -4.0 },
  ];
  for (const { param, expected } of cases) {
    test(`divide(${param.join(', ')}) = ${expected}`, () => {
      const calc = new Calc();
      expect(calc.divide(...param)).toBeCloseTo(expected);
    });
  }
});

describe('Calc.divide() Error Cases', () => {
  test('should throw when dividing by zero', () => {
    const calc = new Calc();
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});

describe('Calc All Methods Input Validation', () => {
  const methods = ['add', 'subtract', 'multiply', 'divide'];
  const errorCases = [
    ['abc', 2],
    [2, false],
    [null, 5],
    [NaN, 1],
  ];

  for (const method of methods) {
    for (const param of errorCases) {
      test(`${method}(${param.join(', ')}) should throw type error`, () => {
        const calc = new Calc();
        expect(() => calc[method](...param)).toThrow('Invalid input: both arguments must be numbers');
      });
    }
  }
});
