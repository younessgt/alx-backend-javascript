export default function getStudentIdsSum(listStudent) {
  // 0 is initial value of sum
  const listReduced = listStudent.reduce((sum, elem) => sum + elem.id, 0);
  return listReduced;
}
