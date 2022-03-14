import React from "react";
import "./Header.scss";
import logo from "../../Assets/Images/to-do-list.png";
import { Context } from "../../Context/Theme";
const elBody = document.getElementById("body");

function Header() {
  const { theme, setTheme } = React.useContext(Context);
  if (elBody.classList.contains("light")) {
    elBody.classList.remove("light");
    elBody.classList.add(theme);
  } else if (elBody.classList.contains("dark")) {
    elBody.classList.remove("dark");
    elBody.classList.add(theme);
  } else {
    elBody.classList.add(theme);
  }
  return (
    <header className="header">
      <img src={logo} alt="" width={50} />
      <span className="header__to">TO</span>
      <span className="header__do">DO</span>
      <select
        value={theme}
        className="header__theme"
        onChange={(evt) => {
          window.localStorage.setItem("theme", evt.target.value);
          setTheme(evt.target.value);
        }}
      >
        <option value="light">Light mode</option>
        <option value="dark">Dark mode</option>
      </select>
    </header>
  );
}

export default Header;
