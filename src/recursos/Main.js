import React from 'react'
import '../estilos/main.css'
import '../interaccion/scroll.js'

export const Main = () => {
  return (
    <div className='main_general'>
       <main className='main_1'>
        <div className='saludo_contenedor'>
          <h1 className='nom_principl'>
            Buenas, Soy carlos
          </h1>
          </div>
          <div className='rompe'>
            <p className='parrafo_1'>Este proyecto fue realizado y creado
             lo puedes lograr con determinacion y </p>
          </div>
       </main>
       <div className='main_2'>
           <div className='rompe_1'>
            <p className='parrafo_2'>con la unica intencion de demostrar 
              que si lo intentas 
              esfuerzo constante. Gracias
            </p>
           </div>
       </div>
    </div>
  )
}
