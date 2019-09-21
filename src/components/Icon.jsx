import React from "react";
import style from "./Icon.module.css";

function Icon(props) {
  const { id, onDeleteItem } = props;
  console.log(id);

  return (
    <div id={id} className={style.icon}>
      <p className={style.icon__item} onClick={() => onDeleteItem(id)}>
        +
      </p>
    </div>
  );
}

export default Icon;
