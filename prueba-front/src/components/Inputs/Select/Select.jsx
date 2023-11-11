import { BiCaretDown } from "react-icons/bi";

import style from "./Select.module.css";
import { useState } from "react";

const Select = ({ select, setSelect }) => {
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setSelect({ ...select, values: [...select.values, value] });
    } else {
      setSelect({
        ...select,
        values: select.values.filter((x) => x !== value),
      });
    }
  };
  return (
    <div className="">
      <div className={style.select}>
        <div
          onClick={() => {
            setClick(!click);
          }}
        >
          Select <BiCaretDown />
        </div>
      </div>
      <form className={click ? style.options : style.none}>
        <div className={style.option}>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              name="option"
              value="Option 1"
              className={style.check}
            />
            Option 1
          </label>
        </div>
        <div className={style.option}>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              name="option"
              value="Option 2"
              className={style.check}
            />
            Option 2
          </label>
        </div>
        <div className={style.option}>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              name="option"
              value="Option 3"
              className={style.check}
            />
            Option 3
          </label>
        </div>
        <div className={style.option}>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              name="option"
              value="Option 4"
              className={style.check}
            />
            Option 4
          </label>
        </div>
      </form>
    </div>
  );
};

export default Select;
