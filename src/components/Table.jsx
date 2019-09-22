import React from "react";
import { connect } from "react-redux";
import style from "./Table.module.css";
import TableRows from "./TableRows";
import { deleteItem, changeQuantity } from "../actions/orderDataActions";
import { TableHeader } from "./TableHeader";
import { TableFooter } from "./TableFooter";

function Table(props) {
  const { orderData, onDeleteItem, onChangeQuantity } = props;

  let totalPrice = orderData.reduce(
    (acc, el) => (acc += el.quantity * el.price),
    0
  );

  return (
    <div className={style.table}>
      <TableHeader />
      <TableRows
        orderData={orderData}
        onDeleteItem={onDeleteItem}
        onChangeQuantity={onChangeQuantity}
      />
      <TableFooter totalPrice={totalPrice} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    orderData: state.orderDataReducer.orderData
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteItem: id => dispatch(deleteItem(id)),
  onChangeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
