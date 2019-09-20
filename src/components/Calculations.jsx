import React from "react";
import style from "./Calculations.module.css";
import Table from "./Table";

function Calculations() {
  return (
    <>
      <h3 className={style.header}>Результаты расчёта</h3>
      <Table />
    </>
  );
}

export default Calculations;
