import React from "react";
import { connect } from "react-redux";
import style from "./Table.module.css";
import TableRows from "./TableRows";
import { deleteItem } from "../actions/orderDataActions";

function Table(props) {
  const { orderData, onDeleteItem } = props;
  console.log(orderData);
  console.log(onDeleteItem);

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
      <TableRows orderData={orderData} onDeleteItem={onDeleteItem} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orderData: state.orderData.orderData
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteItem: id => dispatch(deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
