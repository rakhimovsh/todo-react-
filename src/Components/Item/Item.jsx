import "./Item.scss";
import Button from "../Button/Button";

function Item({ text = "hechnarsa yozilmagan" }) {
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

export default Item;
