import React from "react";
import { connect } from "react-redux";
import style from "./Table.module.css";
import { onChangeQuantity, onDeleteItem } from "../../actions/orderDataActions";
import { TableHeader } from "./TableHeader";
import { TableFooter } from "./TableFooter";
import PropTypes from "prop-types";
import classNames from "classnames";
import TableRows from "./TableRows";

function Table({
  orderData,
  onDeleteItem,
  onChangeQuantity,
  className,
  ...attr
}) {
  const classes = classNames(style.table, className);

  let totalPrice = orderData.reduce(
    (acc, el) => (acc += el.quantity * el.price),
    0
  );

  return (
    <div className={classes} {...attr}>
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
    orderData: state.orderData
  };
};

export default connect(
  mapStateToProps,
  { onDeleteItem, onChangeQuantity }
)(Table);

Table.propTypes = {
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
