import React from "react";
import TableRow from "./TableRow";

import style from "./TableRows.module.css";

function TableRows(props) {
  const { orderData } = props;

  return orderData.map(item => <TableRow key={item.id} item={item} />);
}

export default TableRows;
