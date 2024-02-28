function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('Arg must be numbers');
  }
  if (typeof type !== 'string'){
    throw TypeError('type must be string');
  }
  switch (type) {
    case 'SUM':
      result = a + b;
      break;

    case 'SUBTRACT':
      break;
  }
  return Math.round(a + b);
}
module.exports = calculateNumber;
