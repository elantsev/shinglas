import React, { useState } from "react";
import style from "./TableRow.module.css";
import Icon from "./Icon";
import { numberFormatter } from "../utils/numberFormatter";

function TableRow(props) {
  const {
    id,
    img,
    name: { name, href },
    quantity,
    quantityUnit,
    price
  } = props.item;

  const { onDeleteItem, onChangeQuantity } = props;

  const [quantityEditMode, setQuantityEditMode] = useState(false);

  const onChangeQuantityHandler = event => {
    let value = event.target.value;
    if (value >= 0 && value % 1 === 0) {
      onChangeQuantity(id, event.target.value);
    }
  };

  return (
    <div id={id} className={style.table__row}>
      <div className={style.table__item}>
        <img className={style.table__img} url={img} alt="pic" />
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
