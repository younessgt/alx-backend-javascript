export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const item of map.keys()) {
      if (map.get(item) === 1) {
        map.set(`${item}`, 100);
      }
    }
  } else {
    throw Error('Cannot process');
  }
}
