import React from "react";
import style from "./TableRow.module.css";
import Icon from "./Icon";

function TableRow(props) {
  const {
    id,
    img,
    name: { name, href },
    quantity: { quantity, unit },
    price
  } = props.item;
  return (
    <div id={id} className={style.table__row}>
      <div className={style.table__item}>
        <img className={style.table__link} href={img} alt="pic" />
      </div>
      <div className={style.table__item}>
        <a className={style.table__link} href={href}>
          {name}
        </a>
      </div>
      <div className={style.table__item}>{`${quantity} ${unit}`}</div>
      <div className={style.table__item}>{price}</div>
      <div className={style.table__item}>{quantity * price}</div>
      <div className={style.table__item}>
        <Icon id={id} />
      </div>
    </div>
  );
}

export default TableRow;
