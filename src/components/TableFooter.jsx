import React from "react";
import style from "./TableFooter.module.css";
import { numberFormatter } from "../utils/numberFormatter";
export const TableFooter = props => {
  const { totalPrice } = props;
  return (
    <div className={style.table__footer}>
      <div className={style.table__item}>ИТОГО:</div>
      <div className={style.table__item}>{numberFormatter(totalPrice)}</div>
    </div>
  );
};
