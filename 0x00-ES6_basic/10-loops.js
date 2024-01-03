export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const str of array) {
    newArray.push(appendString + str);
  }

  return newArray;
}
