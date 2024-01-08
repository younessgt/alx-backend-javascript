export default function updateStudentGradeByCity(listStudent, city, newGrades) {
  const grades = newGrades.reduce((arr, obj) => ({
    ...arr,
    [obj.studentId]: obj.grade,
  }), {});
  const final = listStudent.filter((ele) => ele.location === city).map((student) => ({
    ...student,
    grade: grades[student.id] || 'N/A',
  }));
  return final;
}
