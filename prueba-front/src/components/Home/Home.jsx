import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.home}>
      <Main/>
      <Banner/>
    </div>
  );
};

export default Home;
