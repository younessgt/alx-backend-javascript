export default function getStudentIdsSum(listStudent) {
  const listReduced = listStudent.reduce((sum, elem) => sum + elem.id, 0); // 0 is initial value of sum
  return listReduced;
}
