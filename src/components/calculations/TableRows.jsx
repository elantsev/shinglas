import React from "react";
import TableRow from "./TableRow";
import { PropTypes } from "prop-types";

function TableRows({ orderData, onDeleteItem, onChangeQuantity, ...attrs }) {
  return orderData.map(item => (
    <TableRow
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onChangeQuantity={onChangeQuantity}
      {...attrs}
    />
  ));
}

export default TableRows;

TableRows.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  orderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      name: PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string
      }),
      quantity: PropTypes.number,
      quantityUnit: PropTypes.string,
      price: PropTypes.number
    })
  )
};
