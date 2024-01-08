export default function getListStudentIds(listStudent) {
  if (!Array.isArray(listStudent)) {
    return [];
  }

  const listId = listStudent.map((ele) => ele.id);
  return listId;
}
