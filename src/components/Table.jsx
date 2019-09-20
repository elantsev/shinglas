import React from "react";
import style from "./Table.module.css";
import TableRows from "./TableRows";

function Table() {
  return (
    <div className={style.table}>
      <div className={style.table__header}>
        <div className={style.table__item}></div>
        <div className={style.table__item}>Наименование</div>
        <div className={style.table__item}>Кол-во</div>
        <div className={style.table__item}>Цена за ед,</div>
        <div className={style.table__item}>Стоимость,</div>
        <div className={style.table__item}></div>
      </div>
      <TableRows />
    </div>
  );
}

export default Table;
