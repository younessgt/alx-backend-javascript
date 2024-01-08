export default function getStudentsByLocation(listStudent, city) {
  const listFiltred = listStudent.filter((ele) => ele.location === city);
  return listFiltred;
}
