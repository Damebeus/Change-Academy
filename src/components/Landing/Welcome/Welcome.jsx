import React from "react";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={style.container}>
      <div className={style.navbar}></div>

      <div className={style.subcontainer}>
        <div className={style.circulo}>
          <div className={style.contenido}>
            <div className={style.titulo}>
              <h1>
                Comienza tu camino como <span>desarrollador</span> junto a
                nosotros.
              </h1>
            </div>
            <div className={style.boton}>
              <button>
                <span>Empieza ya</span>
              </button>
            </div>
          </div>
        </div>
        <div className={style.imagen}></div>
      </div>
    </div>
  );
}

export default Welcome;
