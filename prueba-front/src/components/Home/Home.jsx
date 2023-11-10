import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import style from "./Home.module.css";
import Footer from "./../Footer/Footer";
import Cards from "../Cards/Cards";

const Home = ({ data }) => {
  return (
    <div>
      <div className={style.home}>
        <Main />
        <Banner />
      </div>
      <div>
        <Cards data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
