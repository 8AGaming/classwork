// With God's Help
import Title from "./Title";
const Header = () => {
  return (
    <>
      <div id="header">
        <div id="titleHeader">
          <Title text="My Website" size="large" />
        </div>
        <button
          onClick={() => {
            console.log(document.getElementById("titleHeader")?.textContent);
          }}
          id="headerButton"
        >
          Click Me
        </button>
      </div>
    </>
  );
};
// const button = document.getElementById("headerButton");
// const title = document.getElementById("titleHeader");

// button?.addEventListener("click", () => {
//   console.log(title?.innerText);
// });

export default Header;
