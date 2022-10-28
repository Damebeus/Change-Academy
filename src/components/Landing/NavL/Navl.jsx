import React from "react";
import style from "./Navl.module.css";
function Navl() {
  return (
    /*    <div>
      <div className={style.nav}>
        <ul className={style.ul}>
          <button className={style.btns}>
            <span className={style.firstbtn}>
              Chang<span className={style.e}>e</span>
            </span>
          </button>

          <ul className={style.ul2}>
            <button className={style.btns}>
              <span className={style.midbtn}>Vision</span>
            </button>
            <button className={style.btns}>
              <span className={style.midbtn}>Que Aprenderás</span>
            </button>
            <button className={style.btns}>
              <span className={style.midbtn}>Como Empezar</span>
            </button>
          </ul>

          <ul className={style.ul}>
            <button className={style.btns}>
              <span className={style.lastbtn}>Empieza Ya</span>
            </button>
          </ul>
        </ul>
      </div>
    </div> */
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
