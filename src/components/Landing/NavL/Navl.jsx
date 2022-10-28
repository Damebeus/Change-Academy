import React from 'react'
import style from './Navl.module.css';
function Navl() {
  return (
    <div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
</style>

        <div className={style.nav}>
            <ul className={style.ul}>
              <button className={style.btns}>
                      <span className={style.firstbtn}>Chang<span className={style.e}>e</span></span>
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
    </div>
  )
}

export default Navl