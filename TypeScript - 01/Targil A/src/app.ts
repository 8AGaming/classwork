// With God's Help

// 1
const sum = (numA: number, numB: number): number => {
  return numA + numB;
};
console.log(sum(2, 2));

// 2
const theBiggerOne = (numA: number, numB: number): number => {
  if (numA > numB) return numA;
  return numB;
};

console.log(theBiggerOne(1, 2));

// 3
const isEven = (num: number): string => {
  if (num % 2 === 0) return "Even";
  return "Odd";
};

console.log(isEven(22));

// 4
const stringLength = (string: string): number => {
  return string.length;
};

console.log(stringLength("Hello My Name Is Asaf"));

// 5
const nList = (n: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    result.push(i);
  }
  return result;
};

console.log(nList(5));

// 6
const maxNumberFromArray = (array: number[]): number => {
  let maxNumber: number = array[0];
  array.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
};

console.log(maxNumberFromArray([23, 2, 54, 87, 32]));

// 7
type Person = {
  Name: string;
  Age: number;
  isStudent: boolean;
};

// 8
const printPerson = (Person: Person): void => {
  console.log(Person);
};

const person: Person = { Name: "Asaf", Age: 21, isStudent: true };
printPerson(person);

// 9
const isMinor = (Person: Person): boolean => {
  if (Person.Age < 18) return true;
  return false;
};

console.log(isMinor(person));

// 10
interface Book {
  Title: string;
  Author: string;
  Year: number;
}

// 11
type Reader = {
  person: Person;
  favoriteBook: Book;
};

// 12
const person1: Person = { Name: "Asaf1", Age: 22, isStudent: true };
const person2: Person = { Name: "Asaf2", Age: 23, isStudent: true };

const book: Book = { Title: "BOOK", Author: "A1", Year: 1987 };
const book1: Book = { Title: "BOOK1", Author: "A1", Year: 1988 };
const book2: Book = { Title: "BOOK1", Author: "A1", Year: 1989 };

const readers: Reader[] = [
  {
    person: person,
    favoriteBook: book,
  },
  {
    person: person1,
    favoriteBook: book1,
  },
  {
    person: person2,
    favoriteBook: book2,
  },
];

const oldestReader = (array: Reader[]): Reader => {
  let maxAge: number = array[0].person.Age;
  let result: any;
  array.forEach((reader) => {
    if (reader.person.Age > maxAge) {
      result = reader;
      maxAge = result.person.Age;
    }
  });
  return result;
};
console.log(oldestReader(readers));

// 13
const oldestBook = (array: Reader[]): Book => {
  let oldestBook: number = array[0].favoriteBook.Year;
  let result: any;
  array.forEach((reader) => {
    if (reader.favoriteBook.Year <= oldestBook) {
      oldestBook = reader.favoriteBook.Year;
      result = reader.favoriteBook;
    }
  });
  return result;
};

console.log(oldestBook(readers));
