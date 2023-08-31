// With God's Help+
import Title from "./Title";
import { CSSProperties } from "react";
interface BookProps {
  title: string;
  imgUrl: string;
  paragraph: string;
  id?: string;
}
const imgStyle: CSSProperties = { width: "200px" };
type BookType = (props: BookProps) => JSX.Element;
const Book: BookType = (props) => {
  return (
    <>
      <div className="book" id={props.id ? "firstBookShow" : ""}>
        <div className="title">
          <Title text={props.title} size="large" />
        </div>
        <img src={props.imgUrl} style={imgStyle} />
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};

export default Book;
