import "./Header.scss";
import logo from "../../Assets/Images/to-do-list.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" width={50} />
      <span className="header__to">TO</span>
      <span className="header__do">DO</span>
    </header>
  );
}

export default Header;
