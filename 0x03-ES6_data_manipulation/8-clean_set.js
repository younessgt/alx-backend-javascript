export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const setToArray = Array.from(set)
    .filter((ele) => typeof ele === 'string' && ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length));

  return setToArray.join('-');
}
