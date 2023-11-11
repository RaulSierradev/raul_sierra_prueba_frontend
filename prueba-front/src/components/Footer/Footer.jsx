import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.info}>
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>consectetur adipiscing elit. Aenean varius ligula est,</p>
        </div>
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>consectetur adipiscing elit. Aenean varius ligula est,</p>
        </div>
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>consectetur adipiscing elit. Aenean varius ligula est,</p>
        </div>
      </div>
      <div className={style.finish}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <a className={style.buttonFinish} onClick={()=>console.log("Footer Link")}>
          Link Here
        </a>{" "}
        Lorem ipsum
      </div>
    </div>
  );
};

export default Footer;
