import { h } from "preact";
import style from "./style.css";
import img from "../../assets/me220.png";
import imggame from "../../assets/game90.png";
import Separator from "../../components/separator";
import Subheading from "../../components/subheading";

const Home = () => (
  <div class={style.home}>
    <div class={style.profile}>
      <img src={img} alt="Zyplos's Icon" />
      <div>
        <h1>Zyplos</h1>
        <Separator margin="8px" />
        {/* <p>Offline: 3 Days</p> */}
        <div class={style.game_card}>
          <img src={imggame} alt="Current Game" />
          <div>
            <p class={style.online}>⯁ Playing: Visual Studio Code</p>
            <p>Editing: index.js</p>
            <p>Workspace: zyplos.dev</p>
          </div>
        </div>
        <Separator margin="8px" />
        <span>Friend Code: 7867830791737903</span>
      </div>
    </div>

    <Subheading>Play Activity</Subheading>
    <Separator margin="10px" />
  </div>
);

export default Home;
