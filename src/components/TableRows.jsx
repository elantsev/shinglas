import React from "react";
import TableRow from "./TableRow";

function TableRows(props) {
  const { orderData, onDeleteItem } = props;

  return orderData.map(item => (
    <TableRow key={item.id} item={item} onDeleteItem={onDeleteItem} />
  ));
}

export default TableRows;
