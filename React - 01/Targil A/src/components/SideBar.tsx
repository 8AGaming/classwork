// With God's Help
import { Books } from "./Main";
const SideBar = () => {
  return (
    <div>
      <div id="SideBar">
        <button
          onClick={() => {
            Books.forEach((book) => {
              console.log(book.props);
            });
          }}
        >
          Print All Books
        </button>
        <button
          onClick={() => {
            console.log(Books[0].props);
          }}
        >
          Print First Book
        </button>
      </div>
    </div>
  );
};

export default SideBar;
