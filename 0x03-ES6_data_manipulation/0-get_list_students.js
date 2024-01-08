export default function getListStudents() {
  const firstPerson = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const secondPerson = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const thirdPerson = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  const listPerson = [firstPerson, secondPerson, thirdPerson];
  return listPerson;
}
