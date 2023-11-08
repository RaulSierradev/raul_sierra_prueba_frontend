import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <ul className={style.nav}>
        <li className={style.item}>Home</li>
        <li className={style.item}>Pages</li>
        <li className={style.item}>About</li>
        <li className={style.item}>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
