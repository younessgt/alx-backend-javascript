const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test integer', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(10, 3), 13);
    assert.strictEqual(calculateNumber(0, 5), 5);
  });

  it('test float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 5);
  });

  it('test not a number', () => {
    assert.throws(() => calculateNumber('test', 12), {
      name: 'TypeError',
      message: 'Arg must be numbers',
    });
    assert.throws(() => calculateNumber(12, 'test'), {
      name: 'TypeError',
      message: 'Arg must be numbers',
    });
  });
});
