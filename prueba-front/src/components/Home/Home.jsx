import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import style from "./Home.module.css";
import Footer from "./../Footer/Footer";
import Cards from "../Cards/Cards";
import Inputs from "../Inputs/Inputs";

const Home = ({ data }) => {
  return (
    <div>
      <div className={style.home}>
        <Main />
        <Banner />
      </div>

      <Cards data={data} />

      <Inputs />

      <Footer />
    </div>
  );
};

export default Home;
