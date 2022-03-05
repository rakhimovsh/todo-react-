import "./Button.scss";
function Button({ text, typeBtn }) {
  return <button className={`button ${typeBtn}`}>{text}</button>;
}

export default Button;
