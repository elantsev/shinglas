import React from "react";
import { connect } from "react-redux";
import style from "./Table.module.css";
import TableRows from "./TableRows";
import { deleteItem } from "../actions/orderDataActions";
import { TableHeader } from "./TableHeader";

function Table(props) {
  const { orderData, onDeleteItem } = props;

  return (
    <div className={style.table}>
      <TableHeader />
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
