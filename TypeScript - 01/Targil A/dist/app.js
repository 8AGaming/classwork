"use strict";
// With God's Help
// 1
const sum = (numA, numB) => {
    return numA + numB;
};
console.log(sum(2, 2));
// 2
const theBiggerOne = (numA, numB) => {
    if (numA > numB)
        return numA;
    return numB;
};
console.log(theBiggerOne(1, 2));
// 3
const isEven = (num) => {
    if (num % 2 === 0)
        return "Even";
    return "Odd";
};
console.log(isEven(22));
// 4
const stringLength = (string) => {
    return string.length;
};
console.log(stringLength("Hello My Name Is Asaf"));
// 5
const nList = (n) => {
    const result = [];
    for (let i = 1; i < n + 1; i++) {
        result.push(i);
    }
    return result;
};
console.log(nList(5));
// 6
const maxNumberFromArray = (array) => {
    let maxNumber = array[0];
    array.forEach((number) => {
        if (number > maxNumber) {
            maxNumber = number;
        }
    });
    return maxNumber;
};
console.log(maxNumberFromArray([23, 2, 54, 87, 32]));
// 8
const printPerson = (Person) => {
    console.log(Person);
};
const person = { Name: "Asaf", Age: 21, isStudent: true };
printPerson(person);
// 9
const isMinor = (Person) => {
    if (Person.Age < 18)
        return true;
    return false;
};
console.log(isMinor(person));
// 12
const person1 = { Name: "Asaf1", Age: 22, isStudent: true };
const person2 = { Name: "Asaf2", Age: 23, isStudent: true };
const book = { Title: "BOOK", Author: "A1", Year: 1987 };
const book1 = { Title: "BOOK1", Author: "A1", Year: 1988 };
const book2 = { Title: "BOOK1", Author: "A1", Year: 1989 };
const readers = [
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
const oldestReader = (array) => {
    let maxAge = array[0].person.Age;
    let result;
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
const oldestBook = (array) => {
    let oldestBook = array[0].favoriteBook.Year;
    let result;
    array.forEach((reader) => {
        if (reader.favoriteBook.Year <= oldestBook) {
            oldestBook = reader.favoriteBook.Year;
            result = reader.favoriteBook;
        }
    });
    return result;
};
console.log(oldestBook(readers));
