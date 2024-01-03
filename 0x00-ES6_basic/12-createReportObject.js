export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (allEmployees) => Object.keys(allEmployees).length,

  };
  return obj;
}
