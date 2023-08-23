import React from 'react'
import '../estilos/header.css'

export const Header = () => {
  return (
    <div>
        <header id='header'>
          <div  className='contenedor_blanco_nav'>
          <nav className='nav_blanco'>
            <ul className='ul_'>
                <li className='letra_nav'> <a href='#header' className='a_nav'>
                  Inicio
                  </a>
                  </li>
                <li className='letra_nav'> 
                <a href='#cotenedor_de_proyectos' className='a_nav'>Experiencia </a>
                </li>           
                <li className='letra_nav'>
                <a href='#contenedor_footer' className='a_nav'>
                  Contacto
                  </a>
                  </li>            
                <li className='letra_nav'>
                <a href='#contenedor_footer' className='a_nav'>Comentarios
                </a></li>
                
            </ul>
          </nav>
          </div>
          <div className='contenedor_negro_nav'>
          <ul>
          <li className='lista'>
          <a href='#contenedor_footer' className='a_nav_2'>Resumen
          </a></li>
        
          </ul>
        </div>
        </header>
    </div>
  )
}
export default Header;
