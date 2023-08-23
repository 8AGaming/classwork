// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
enum ItemType {
  Book = "book",
  DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book;
  title: string;
  author: string;
}

interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// // Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
type ItemInterface = Book | DVD;

type FilterFn = <K extends ItemInterface>(item: K) => boolean;

type FilterType = <T extends ItemInterface>(array: T[], func: FilterFn) => T[];

const filterFn: FilterFn = (item) => {
  if (item.type === "dvd") return item.duration > 120;
  return false;
};

const filterItems: FilterType = (items, filterFn) => {
  return items.filter(filterFn);
};

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T extends ItemInterface>(items: T[]): void {
  items.forEach((item) => console.log(item));
}

// Test data
const libraryItems: (Book | DVD)[] = [
  {
    type: ItemType.Book,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: ItemType.DVD, title: "Inception", duration: 148 },
  { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: ItemType.DVD, title: "Avatar", duration: 162 },
  { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];

// Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
console.log(filterItems(libraryItems, filterFn));

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של

const harperLeeFilter: FilterFn = (item) => {
  if (item.type === "book" && item.author === "Harper Lee") return true;
  return false;
};

console.log(filterItems(libraryItems, harperLeeFilter));
