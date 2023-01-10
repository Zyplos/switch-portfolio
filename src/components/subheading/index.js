import { h } from "preact";
import style from "./style.css";

const Subheading = ({ children }) => <h2 class={style.subheading}>{children}</h2>;

export default Subheading;
