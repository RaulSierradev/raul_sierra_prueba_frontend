import { useState } from "react";
import Form from "./Form/Form";
import style from "./Inputs.module.css";
import Radio from "./Radio/Radio";
import Select from "./Select/Select";

const Inputs = () => {
  const [select, setSelect] = useState({
    values: [],
  });
  const [radio, setRadio] = useState({
    values: [],
  });
  return (
    <div className={style.inputs}>
      <div className={`${style.space}`}>
        <Select select={select} setSelect={setSelect} />
      </div>
      <div className={`${style.space}`}>
        <Radio radio={radio} setRadio={setRadio} />
      </div>
      <div className={`${style.space}`}>
        <Form select={select} radio={radio} />
      </div>
    </div>
  );
};

export default Inputs;
