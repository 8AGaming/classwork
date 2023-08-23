"use strict";
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (ItemType = {}));
const filterFn = (item) => {
    if (item.type === "dvd")
        return item.duration > 120;
    return false;
};
const filterItems = (items, filterFn) => {
    return items.filter(filterFn);
};
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items) {
    items.forEach((item) => console.log(item));
}
// Test data
const libraryItems = [
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
const harperLeeFilter = (item) => {
    if (item.type === "book" && item.author === "Harper Lee")
        return true;
    return false;
};
console.log(filterItems(libraryItems, harperLeeFilter));
