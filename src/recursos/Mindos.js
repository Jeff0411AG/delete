import React from 'react'
import '../estilos/min_dos.css'
import  '../interaccion/min_dos.js'

export const Min_dos = () => {
  return (
    <div className='contenedor_general_dos'>
        <div className='contendor_img'>
       
        </div>
         <div className='contenedor_min_dos'>
            <div className='contendeor_d_java'>
            <img  src={require('../images/Java.jpg')} className='image__java' alt='image_java'></img>
            </div>
            <div className='contenedor_d_spring'>
                <img src={require('../images/spring-boot.jpeg')} className='img_spring' alt='image_spring'></img>
            </div>
            <div className='contenedor_d_mysql'>
                <img src={require('../images/new.webp')} className='img_mysq' alt='image_mysql'></img>
            </div>
            <div className='backend'>
                <p className='lenguaje_back'>Lengunajes de backend</p>
            </div>
         </div>
         <div className='contenedor_min_tres'>
                    <div className='contenedor_javascript'>
                        <img src={require('../images/javascript.jpg')} className='img_javascript'b alt='image_javascript'></img>
                    </div>
                    <div className='contendor_botstrap'>
                        <img src={require('../images/bootstrap-1.jpg')} className='img_bots' alt='imagen_bootstrap'></img>
                    </div>
                    <div className='contenedor_react'>
                        <img src={require('../images/react.jpg')} className='img_react' alt='image_react'></img>
                    </div>
                    <div className='contenedor_git'>
                        <img src={require('../images/git.png')} alt='imagen_git' className='img_git'></img>
                    </div>
                    <div className='cont_front'>
                        <p className='letra_front'>Lenguje Front-end</p>
                    </div>
         </div>
    </div>
  )
}
