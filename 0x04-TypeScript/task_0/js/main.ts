interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "jack",
  lastName: "jolly",
  age: 25,
  location: "Bali",
}

const secondStudent: Student = {
  firstName: "sam",
  lastName: "petter",
  age: 30,
  location: "Berlin",
}

// declaring arr as an array of Student
const arr: Student[] = [firstStudent, secondStudent];
// creating table
const table: HTMLTableElement = document.createElement('table');
// creating table Head
const tableHead: HTMLTableSectionElement = document.createElement('thead');
// creatin table Row
const headRow: HTMLTableRowElement = document.createElement('tr');
// creating the table Body
const tableBody: HTMLTableSectionElement = document.createElement('tbody');
// creating the cells 'firstname and location'
const headRowCell1: HTMLTableCellElement = document.createElement('td');
const headRowCell2: HTMLTableCellElement = document.createElement('td');

headRowCell1.textContent = "firstName";
headRowCell2.textContent = "location";

headRow.appendChild(headRowCell1);
headRow.appendChild(headRowCell2);

tableHead.appendChild(headRow);

arr.forEach(student => {
  const bodyRow: HTMLTableRowElement = document.createElement('tr');
  const bodyRowCell1: HTMLTableCellElement = document.createElement('td');
  const bodyRowCell2: HTMLTableCellElement = document.createElement('td');

  bodyRowCell1.textContent = student.firstName;
  bodyRowCell2.textContent = student.location;
  
  bodyRow.appendChild(bodyRowCell1);
  bodyRow.appendChild(bodyRowCell2);

  tableBody.appendChild(bodyRow);
});

table.appendChild(tableHead);
table.appendChild(tableBody);

document.body.appendChild(table);
