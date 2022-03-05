import "./Button.scss";
import PropTypes from "prop-types";
function Button({ text, typeBtn }) {
  return <button className={`button ${typeBtn}`}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default Button;
