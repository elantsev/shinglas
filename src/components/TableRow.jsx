import React, { useState } from "react";
import style from "./TableRow.module.css";
import Icon from "./Icon";
import { numberFormatter } from "../utils/numberFormatter";
import { PropTypes } from "prop-types";
import classNames from "classnames";

function TableRow({
  onDeleteItem,
  onChangeQuantity,
  className,
  item: {
    id,
    img,
    name: { name, href },
    quantity,
    quantityUnit,
    price
  }
}) {
  const [quantityEditMode, setQuantityEditMode] = useState(false);

  const classes = classNames(style.table__row, className);

  const onChangeQuantityHandler = event => {
    let value = +event.target.value;
    if (value >= 0 && value % 1 === 0) {
      onChangeQuantity(id, value);
    }
  };

  return (
    <div id={id} className={classes}>
      <div className={style.table__item}>
        <img className={style.table__img} src={img} alt="pic" />
      </div>
      <div className={style.table__item}>
        <a className={style.table__link} href={href}>
          {name}
        </a>
      </div>
      <div
        className={style.table__item}
        onClick={() => setQuantityEditMode(true)}
      >
        {!quantityEditMode && (
          <span title="кликните для корректировки">
            {`${quantity} ${quantityUnit}`}
          </span>
        )}
        {quantityEditMode && (
          <p className={style.table__quantity_p}>
            <input
              autoFocus
              type="number"
              value={quantity}
              className={style.table__quantity_input}
              onChange={onChangeQuantityHandler}
              onBlur={() => setQuantityEditMode(false)}
            />
            <span>{quantityUnit}</span>
          </p>
        )}
      </div>
      <div className={style.table__item}>
        <p>{numberFormatter(price)}</p>
      </div>
      <div className={style.table__item}>
        {numberFormatter(price * quantity)}
      </div>
      <div className={style.table__item}>
        <Icon id={id} onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
}

export default TableRow;

TableRow.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  item: PropTypes.shape({
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
};
