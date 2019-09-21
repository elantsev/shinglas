import React from "react";
import style from "./TableRow.module.css";
import Icon from "./Icon";

function TableRow(props) {
  const {
    id,
    img,
    name: { name, href },
    quantity: { quantity, unit },
    price
  } = props.item;

  let unitFormatted = `${quantity} ${unit}`;
  let priceFormatted = String(price.toFixed(2)).replace(
    /(\d)(?=(\d{3})+([^\d]|$))/g,
    "$1 "
  );
  let quantityFormatted = String((quantity * price).toFixed(2)).replace(
    /(\d)(?=(\d{3})+([^\d]|$))/g,
    "$1 "
  );

  return (
    <div id={id} className={style.table__row}>
      <div className={style.table__item}>
        <img className={style.table__link} href={img} alt="pic" />
      </div>
      <div className={style.table__item}>
        <a className={style.table__link} href={href}>
          {name}
        </a>
      </div>
      <div className={style.table__item}>{unitFormatted}</div>
      <div className={style.table__item}>
        <p>{priceFormatted}</p>
      </div>
      <div className={style.table__item}>{quantityFormatted}</div>
      <div className={style.table__item}>
        <Icon id={id} />
      </div>
    </div>
  );
}

export default TableRow;
