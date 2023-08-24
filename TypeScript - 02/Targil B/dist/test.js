// With God's Help
const filterFn = (item) => {
  return item.duration > 120;
};
const filterItems = (items, filterFn) => {
  return items.filter(filterFn);
};
const libraryItems = [
  {
    type: "book",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: "DVD", title: "Inception", duration: 148 },
  { type: "book", title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: "DVD", title: "Avatar", duration: 162 },
  { type: "book", title: "Go Set a Watchman", author: "Harper Lee" },
];

console.log(filterItems(libraryItems, filterFn));
