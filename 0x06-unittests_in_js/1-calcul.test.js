const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 10, 3), 13);
    assert.strictEqual(calculateNumber('SUM', 0, 5), 5);
    assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
  });

  it('test SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 8), 2);
  });

  it('test DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2.2), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0), 'Error');
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
  it('test type not a string', () => {
    assert.throws(() => calculateNumber(0 ,10, 12), {
      name: 'TypeError',
      message: 'type must be string',
    });
  });
});
