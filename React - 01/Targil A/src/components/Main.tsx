// With God's Help
import Book from "./Book";
import SideBar from "./SideBar";
export const Books = [
  <Book
    title="LeBron James"
    imgUrl="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
    paragraph="The Greatest Basketball Player Of All Time (In My Opinion)"
    id="firstBookShow"
  />,
  <Book
    title="The Moon"
    imgUrl="https://toppng.com/uploads/preview/moon-transparent-png-full-moon-11562897860tahg4ponos.png"
    paragraph="Our beloved moon!"
  />,
  <Book
    title="LeBron James"
    imgUrl="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
    paragraph="The Greatest Basketball Player Of All Time (In My Opinion)"
  />,
];
const Main = () => {
  return (
    <div id="main">
      <SideBar />
      <div id="books">{Books}</div>
    </div>
  );
};
export default Main;
