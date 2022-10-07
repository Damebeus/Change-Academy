import React from 'react'
import Navl from './NavL/Navl'
import NuestroStack from './NuestroStack/NuestroStack'
import Welcome from './Welcome/Welcome'
import Vision from './Vision/Vision'
import Opiniones from './Opiniones/Opiniones'

function Landing() {
  return (
    <div>
      <h1>hola</h1>
      <Navl/>
      <Welcome/>
      <NuestroStack/>
      <Vision/>
      <Opiniones/>
    </div>
  )
}

export default Landing