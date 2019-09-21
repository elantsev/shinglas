import React from "react";
import { connect } from "react-redux";
import style from "./Table.module.css";
import TableRows from "./TableRows";

function Table(props) {
  const { orderData } = props;
  console.log(orderData);

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
      <TableRows orderData={orderData} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orderData: state.orderData
  };
};

export default connect(mapStateToProps)(Table);
