// task1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: "Alex",
  lastName: "Oly",
  fullTimeEmployee: false,
  location: 'london',
  contract: false,
}

console.log(teacher);
// task2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// task3
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction =  (firstName, lastName) => {
  return `${firstName[0]}.${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// task4

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
const StudentClass: StudentConstructor = 
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return `Currently working`;
  }
  displayName(): string {
    return `${this.firstName}`;
  }
}

