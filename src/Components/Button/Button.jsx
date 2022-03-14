import "./Button.scss";
import PropTypes from "prop-types";
function Button({ text, typeBtn, data, onClick, ...otherProps }) {
  return (
    <button onClick={onClick} className={`button ${typeBtn}`} {...otherProps}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default Button;
