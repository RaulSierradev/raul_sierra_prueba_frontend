import {
  BiMenu,
  BiMenuAltRight
} from "react-icons/bi";

import { FiChevronDown } from "react-icons/fi";

import style from "./HeaderMobile.module.css";
import { useState } from "react";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={style.headerMobile}>
        <div className={style.openMenu} onClick={() => setOpen(!open)}>
          {open ? <BiMenuAltRight /> : <BiMenu />}
        </div>
        <div className={`${open ? "" : style.none}`}>
          <ul className={style.contentMobile}>
            <li className={style.section}>
              <p>Home</p>
            </li>
            <li className={style.section} >
              <p>Pages <FiChevronDown /></p>
              <ul className={style.subContentMobile}>
                <li className={style.section2}>Page 1</li>
                <li className={style.section2}>Page 2</li>
                <li className={style.section2}>
                  Page 3 <FiChevronDown />
                  <ul className={style.subContentMobile2}>
                    <li className={style.section}>Item 1</li>
                    <li className={style.section}>Item 1</li>
                    <li className={style.section}>Item 1</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={style.section}>
              <p>About</p>
            </li>
            <li className={style.section}>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
