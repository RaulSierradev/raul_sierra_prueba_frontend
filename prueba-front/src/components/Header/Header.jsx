import style from "./Header.module.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <ul className={style.nav}>
          <li className={style.item}>
            <p>Home</p>
          </li>
          <li className={style.item}>
            <p>Pages</p>
            <ul className={style.dropdown}>
              <li className={style.subItem}>Page 1</li>
              <li className={style.subItem}>Page 2</li>
              <li className={style.subItem}>
                Page 3
                <ul className={style.dropdownTwo}>
                  <li className={style.subItem2}>Item 1</li>
                  <li className={style.subItem2}>Item 1</li>
                  <li className={style.subItem2}>Item 1</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={style.item}>
            <p>About</p>
          </li>
          <li className={style.item}>
            <p>Contact</p>
          </li>
        </ul>
      </div>

      <HeaderMobile />
    </div>
  );
};

export default Header;
