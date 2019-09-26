import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>Запрашиваемая страница не найдена</h1>
      <Link to="/">
        <Button color="primary">Перейти на главную страницу</Button>
      </Link>
    </>
  );
};

export default Page404;
