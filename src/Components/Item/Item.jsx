import "./Item.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function Item({ text }) {
  return (
    <li className="item">
      <label className="item__checkbox">
        <input className="item__checkbox--input" type="checkbox" />
        <p className="item__text">{text}</p>
      </label>
      <Button text="O`chirish" typeBtn="delete" />
    </li>
  );
}
Item.propTypes = {
  text: PropTypes.string,
};
Item.defaultProps = {
  text: "hechnarsa yozilmagan",
};

export default Item;
