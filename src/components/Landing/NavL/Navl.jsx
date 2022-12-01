import React from "react";
import style from "./Navl.module.css";
function Navl() {
  return (
   
    <div className={style.container}>
      {/*       a partir de aca vamos armando el orden de como van a ir los items, con classname lo mas explicita posible */}
      <div className={style.logo}>
        <h2>
          Chang<span>e</span>
        </h2>
      </div>
      <div className={style.secciones}>
        <span>Vision</span>
        <span>Que aprenderás?</span>
        <span>Guia</span>
      </div>
      <div className={style.botones}>
        <button>
          <span>Empieza Ya</span>
        </button>
      </div>
    </div>
  );
}

export default Navl;
