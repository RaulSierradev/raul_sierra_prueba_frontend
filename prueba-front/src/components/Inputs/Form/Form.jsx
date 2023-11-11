import style from "./Form.module.css";

const Form = ({ select, radio }) => {
  return (
    <div className={style.formContainer}>
      <form className={style.form}>
        <div>
          <label className={style.labelForm}>Name</label>
          <input type="text" name="name" className={style.textForm} />
        </div>
        <div>
          <label className={style.labelForm}>Email</label>
          <input type="email" name="email" className={style.textForm} />
        </div>
        <div className={style.textAreaForm}>
          <p>Select:</p>
          <ul>
            {select.values.length > 0
              ? select.values.map((e, index) => <li key={index}>{e}</li>)
              : "-"}
          </ul>
          <p>Radio:</p>
          <ul>{radio.values.length > 0 ? radio.values : "-"}</ul>
        </div>
      </form>
    </div>
  );
};

export default Form;
