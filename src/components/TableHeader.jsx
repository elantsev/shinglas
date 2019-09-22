import React from "react";
import style from "./TableHeader.module.css";
import classNames from "classnames";

export const TableHeader = ({ className, ...attrs }) => {
  const classes = classNames(style.table__header, className);

  return (
    <div className={classes} {...attrs}>
      <div className={style.table__item}></div>
      <div className={style.table__item}>Наименование</div>
      <div className={style.table__item}>Кол-во</div>
      <div className={style.table__item}>Цена за ед,</div>
      <div className={style.table__item}>Стоимость,</div>
      <div className={style.table__item}></div>
    </div>
  );
};
