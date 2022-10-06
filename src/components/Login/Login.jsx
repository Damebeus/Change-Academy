import React from 'react'

function Login() {
  return (
    <div>
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">contrasenia</label>
        <input type="password" />
        <button>Iniciar cesion</button>
        <button>Registrar nueva Cuenta</button>
    </div>
  )
}

export default Login