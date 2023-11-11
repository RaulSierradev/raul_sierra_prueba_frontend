import style from "./Radio.module.css";

const Radio = ({ radio, setRadio }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setRadio({
      ...radio,
      values: value,
    });
  };
  return (
    <div className={style.radioContainer}>
      <form className={style.radio}>
        <div className={style.radioCheck}>
          <label>
            <input
              type="radio"
              value="Option 1"
              name="radio"
              onChange={handleChange}
              className={style.check}
            />
            Option 1
          </label>
        </div>
        <div className={style.radioCheck}>
          <label>
            <input
              type="radio"
              value="Option 2"
              name="radio"
              onChange={handleChange}
              className={style.check}
            />
            Option 2
          </label>
        </div>
        <div className={style.radioCheck}>
          <label>
            <input
              type="radio"
              value="Option 3"
              name="radio"
              onChange={handleChange}
              className={style.check}
            />
            Option 3
          </label>
        </div>
        <div className={style.radioCheck}>
          <label>
            <input
              type="radio"
              value="Option 4"
              name="radio"
              onChange={handleChange}
              className={style.check}
            />
            Option 4
          </label>
        </div>
      </form>
    </div>
  );
};

export default Radio;
