import React from "react";
import style from "./NuestroStack.module.css";

function NuestroStack() {
  return (
    <div className={style.container}>
      <div className={style.encabezado}>
        <h2 className={style.title}>Encuentra el nivel que se adapte a ti</h2>
        <p className={style.description}>Tenemos hojas de ruta confeccionadas para cada tipo de alumno, tanto los que empiezan en el mundo del desarrollo como los que ya tienen conocimientos avanzados y solo necesitan un último empujón que les lance al entorno laboral.</p>
      </div>
      <div className={style.contain_stack}>
        <div className={style.Principiante}>
          <div className={style.Container_title}>
            <h2 className={style.title_stack}>Principiante</h2>
            <p className={style.pagrap_stack}>curso de Programacion desde 0 Gratis</p>
          </div>
          <div className={style.contain_list}>
            <div className={style.list}>
              <div className={style.contain_img}>
                <img className={style.img_intro} src="https://img.plasmic.app/img-optimizer/v1/img/6d0aa59a4e950fc2d2263daf6568bcbc.png?w=128&q=75" alt="" />
              </div>
              <div>
                Intriduccion a la programacion
              </div>
            </div>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://img.plasmic.app/img-optimizer/v1/img/907cbb94d50a09da5e4b9885924d137f.png?q=75" alt="" />
                </div>
                <div >
                  HTML y CSS
                </div>
            </a>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://img.plasmic.app/img-optimizer/v1/img/5d7f22ab1e6be7dd663e6edae8d70075.png?q=75 1x, https://img.plasmic.app/img-optimizer/v1/img/5d7f22ab1e6be7dd663e6edae8d70075.png?q=75 2x" alt="" />
                </div>
                <div >
                  HTML y CSS
                </div>
            </a>
          </div>
        </div>
        <div className={style.Front}>
          <div className={style.Container_title}>
            <h2 className={style.title_stack}>Front-End</h2>
            <p className={style.pagrap_stack}>Curso de Front-End Gratis</p>
          </div>
          <div className={style.contain_list}>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://img.plasmic.app/img-optimizer/v1/img/86adce8a4da5af9dc5c370f9f4e29ffc.png?q=75" alt="" />
                </div>
                <div >
                  React
                </div>
            </a>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png" alt="" />
                </div>
                <div >
                  Bootstrap
                </div>
            </a>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                </div>
                <div >
                  Tailwind
                </div>
            </a>
          </div>
        </div>
        <div className={style.Back}>
          <div className={style.Container_title}>
            <h2 className={style.title_stack}>Back-End</h2>
            <p className={style.pagrap_stack}>Curso de Back-End Gratis</p>
          </div>
          <div className={style.contain_list}>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://img.plasmic.app/img-optimizer/v1/img/80d40be304fe43bb79796985af273494.png?q=75" alt="" />
                </div>
                <div >
                  Node.js
                </div>
            </a>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript.png" alt="" />
                </div>
                <div >
                  MongoDb
                </div>
            </a>
            <a className={style.amper} href="">
                <div className={style.contain_img}>
                  <img className={style.img_stack} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="" />
                </div>
                <div >
                  AWS
                </div>
            </a>
          </div>
        </div>
        <div className={style.Full}>
          <div className={style.Container_title}>
            <h2 className={style.title_stack}>Full-Stack</h2>
            <p className={style.pagrap_stack}>Curso de Full-Stack Gratis</p>
          </div>
          <div>
            <ul className={style.ul_stack}>
              <li>V</li>
              <li>E</li>
              <li>M</li>
              <li>O</li>
              <li>S</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestroStack;
