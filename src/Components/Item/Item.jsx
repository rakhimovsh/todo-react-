import "./Item.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function Item({ children, todo, handleDelete, handleCheck }) {
  return (
    <li
      className="item"
      style={{ textDecoration: todo.isComplited ? "line-through" : "none" }}
    >
      <label className="item__checkbox">
        <input
          className="item__checkbox--input"
          type="checkbox"
          data-todo-check={todo.id}
          onClick={handleCheck}
          defaultChecked={todo.isComplited}
        />
        <p className="item__text">{children}</p>
      </label>

      <Button
        text="O`chirish"
        typeBtn="delete"
        data-todo-id={todo.id}
        onClick={handleDelete}
      />
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
