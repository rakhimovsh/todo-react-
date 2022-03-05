import "./Main.scss";
import Item from "../Item/Item";
import Button from "../Button/Button";

function Main() {
  return (
    <section className="hero">
      <input
        className="hero__input"
        type="text"
        placeholder="Enter text"
        autoComplete="off"
        required
      />
      <ul className="hero__list">
        <Item text="Yugurishga chiqish" />
        <Item text="Kitob o`qish" />
        <Item text="Dam olish" />
      </ul>
      <div className="hero__bottom">
        <Button text="All" typeBtn="all" />
        <Button text="Uncomlited" typeBtn="uncomlited" />
        <Button text="Complited" typeBtn="complited" />
      </div>
    </section>
  );
}

export default Main;
