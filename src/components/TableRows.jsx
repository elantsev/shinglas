import React from "react";
import TableRow from "./TableRow";

function TableRows(props) {
  const { orderData, onDeleteItem, onChangeQuantity } = props;

  return orderData.map(item => (
    <TableRow
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onChangeQuantity={onChangeQuantity}
    />
  ));
}

export default TableRows;
