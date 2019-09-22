import React from "react";
import style from "./TableFooter.module.css";
import { numberFormatter } from "../utils/numberFormatter";
import { PropTypes } from "prop-types";
import classNames from "classnames";

export const TableFooter = ({ totalPrice, className, ...attrs }) => {
  const classes = classNames(style.table__footer, className);

  return (
    <div className={classes} {...attrs}>
      <div className={style.table__item}>ИТОГО:</div>
      <div className={style.table__item}>{numberFormatter(totalPrice)}</div>
    </div>
  );
};

TableFooter.propTypes = {
  totalPrice: PropTypes.number.isRequired
};
