import React from "react";
import style from "./Icon.module.css";

function Icon(props) {
  const { id } = props;
  return (
    <div id={id} className={style.icon}>
      <p className={style.icon__item}>+</p>
    </div>
  );
}

export default Icon;
