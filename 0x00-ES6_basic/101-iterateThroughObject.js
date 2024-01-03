export default function iterateThroughObject(reportWithIterator) {
  const newReport = [...reportWithIterator];
  return newReport.join(' | ');
}
