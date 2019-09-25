import React from "react";
import style from "./Icon.module.css";
import { PropTypes } from "prop-types";
import classNames from "classnames";

function Icon({ id, onDeleteItem, className }) {
  const classes = classNames(style.icon, className);

  return (
    <div id={id} className={classes}>
      <p className={style.icon__item} onClick={() => onDeleteItem(id)}>
        +
      </p>
    </div>
  );
}

export default Icon;

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func
};
