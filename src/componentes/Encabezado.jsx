import React from 'react'
import foto from '../images/foto.png'
import '../styles/Encabezado.css'
function Encabezado() {
  return (
    <div className='encabezado'>
      <img className='foto' src={foto} alt="foto" />
    </div>
  )
}

export default Encabezado