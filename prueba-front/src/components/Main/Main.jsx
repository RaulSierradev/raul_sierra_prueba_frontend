import { BsFillPlayCircleFill } from "react-icons/bs";

import Header from "../Header/Header";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>Lorem ipsum</h1>
        <h2 className={style.subtitle}>Neque porro quisquam</h2>
        <p className={style.paragraph}>
          {`"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."`}
        </p>
        <p className={style.paragraph}>
          {`"There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..."`}
        </p>
        <div className={style.divButton}>
          <button className={style.button} onClick={()=>console.log("Go There")}>
            <p>Go there...</p> <BsFillPlayCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
