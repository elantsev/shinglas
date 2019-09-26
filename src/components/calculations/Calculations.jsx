import React from "react";
import style from "./Calculations.module.css";
import Table from "./Table";
import LogOut from "../LogOut";

function Calculations() {
  return (
    <>
      <LogOut />
      <h3 className={style.header}>Результаты расчёта</h3>
      <Table />
    </>
  );
}

export default Calculations;
