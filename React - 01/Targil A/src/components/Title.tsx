// With God's Help
interface SomeProps {
  text: string;
  size: "large" | "small" | "medium";
}
// const a:CSSProperties = {fontSize: "20px"}
type TitleType = (props: SomeProps) => JSX.Element;
const Title: TitleType = (props) => {
  return <div style={{ fontSize: props.size }}>{props.text}</div>;
};

export default Title;
