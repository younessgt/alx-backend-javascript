function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('Arg must be numbers');
  }
  if (typeof type !== 'string') {
    throw TypeError('type must be string');
  }
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  let result;
  switch (type) {
    case 'SUM':
      result = roundA + roundB;
      break;

    case 'SUBTRACT':
      result = roundA - roundB;
      break;
    case 'DIVIDE':
      if (roundB === 0) {
        return 'Error';
      }
      result = roundA / roundB;
      break;
    default:
      result = 'type should be SUM or SUBTRACTR or DIVIDE';
  }
  return result;
}
module.exports = calculateNumber;
