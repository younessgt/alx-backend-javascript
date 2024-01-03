export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const list = Object.values(employees).flat();
  return list;
}
