import "./Button.scss";
import PropTypes from "prop-types";
function Button({ text, typeBtn, data, onClick }) {
  return (
    <button
      onClick={onClick}
      data-todo-id={data || data === 0 ? data : ""}
      className={`button ${typeBtn}`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default Button;
