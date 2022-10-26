import React from "react";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={style.container}>
      <div className={style.navbar}></div>

      <div className={style.subcontainer}>
        <div className={style.circulo}></div>
        <div className={style.imagen}></div>
      </div>
    </div>
  );
}

export default Welcome;
