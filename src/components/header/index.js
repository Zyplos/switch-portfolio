import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import img from "../../assets/me56.png";
import imginputdevice from "../../assets/mouse-keyboard.png";
import Separator from "../separator";

const Header = ({ children }) => {
  console.log(style);
  return (
    <>
      <header class={style.header}>
        <img src={img} alt="Zyplos's Icon" /> <h1>Zyplos's Page</h1>
      </header>
      <div class={style.layout}>
        <nav>
          <Link activeClassName={style.active} href="/">
            Profile
          </Link>
          <Separator />
          <Link activeClassName={style.active} href="/profile">
            Projects
          </Link>
          <Link activeClassName={style.active} href="/profile/john">
            John
          </Link>
        </nav>
        <div>{children}</div>
      </div>
      <footer class={style.footer}>
        <img src={imginputdevice} alt="keyboard icon" />
      </footer>
    </>
  );
};

export default Header;
