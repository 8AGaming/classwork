// With God's Help

// 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const returnOnlyEvenNumbers = (array: number[]): number => {
  let sum: number = 0;
  array.forEach((number) => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
};

console.log(returnOnlyEvenNumbers(numbers));

// 2
type Rect = {
  Width: number;
  Height: number;
};
const rectangleArea = (object: Rect): number => {
  return object.Width * object.Height;
};

const rect: Rect = { Width: 20, Height: 30 };
console.log(rectangleArea(rect));

// 3
const isPolyhedron = (string: string): boolean => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
};

console.log(isPolyhedron("level"));

// 4
const stringArray = ["ASAF", "aSAF", "PeRets"];
const firstUpperElseLower = (array: string[]): string[] => {
  const newArray: string[] = [];
  array.forEach((string) => {
    let newString: string =
      string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    newArray.push(newString);
  });
  return newArray;
};

console.log(firstUpperElseLower(stringArray));

// 5
const reSet = (array: number[]): number[] => {
  const includes: number[] = [];
  array.forEach((number) => {
    if (!includes.includes(number)) {
      includes.push(number);
    }
  });
  return includes;
};

const numbers2 = [
  1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 35, 4, 5, 5, 5, 5, 7, 7, 7, 6,
];

console.log(reSet(numbers2));

// 6
interface Name {
  firstName: string;
  lastName: string;
}
interface Acronyms {
  firstInitial: string;
  lastInitial: string;
}

const returnAcronymsObject = (object: Name): Acronyms => {
  const result: Acronyms = {
    firstInitial: object.firstName.charAt(0),
    lastInitial: object.lastName.charAt(0),
  };
  return result;
};

console.log(returnAcronymsObject({ firstName: "Asaf", lastName: "Perets" }));

// 7
type Person7 = {
  firstName: string;
  lastName: string;
  Age: number;
};
const people: Person7[] = [
  {
    firstName: "AAA",
    lastName: "PPPP",
    Age: 30,
  },
  {
    firstName: "333",
    lastName: "SSSS",
    Age: 24,
  },
  {
    firstName: "WWWW",
    lastName: "PPPP",
    Age: 39,
  },
];

const ageAvg = (people: Person7[]): number => {
  let sum: number = 0;
  people.forEach((person) => {
    sum += person.Age;
  });
  const result = sum / people.length;
  return result;
};

console.log(ageAvg(people));

// 8
interface MaxMin {
  max?: number;
  min?: number;
}

const getMaxMinAsObjectFromArray = (array: number[]): MaxMin => {
  let maxNumber: number = array[0];
  let minNumber: number = array[0];
  array.forEach((number) => {
    if (number < minNumber) {
      minNumber = number;
    }
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  const result: MaxMin = {
    max: maxNumber,
    min: minNumber,
  };
  return result;
};

console.log(getMaxMinAsObjectFromArray(numbers2));

// 9
const reverseArray = (array: any[]): any[] => {
  const reversedArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray.push(array[array.length - i - 1]);
  }
  return reversedArray;
};

console.log(reverseArray(numbers2));
