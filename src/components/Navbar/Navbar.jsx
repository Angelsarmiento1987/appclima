import './Navbar.css'
import axios from 'axios';
import { easeInOut, motion } from "framer-motion"



import React, { useState } from 'react';
import { Hero } from '../Hero/Hero';

const Navbar = () => {
    const[valor, setValor] = useState()
    const[valorProp, setValorProp]=useState()
    
    const [resultadoApi, setResultadoApi]=useState([])
    const[resultadoApi2, setResultadoApi2] = useState([])
    

    /*animacion Logo*/
    
    const svgVariantes = {
        hidden:{rotate: -180},
        visible:{rotate:0,
        transition:{duration: 1}
        }
    }

    const pathVariantes = {
        hidden:{
            opacity:0,
            pathLength:0,
            
        },
        visible:{
            opacity:1,
           pathLength:1,
            transition:{duration:3,
            ease:'easeInOut'}
        }
    }

    console.log("el valor del input es", valor)
        //necesito saber como pasar tanto el valor como el onclick del boton a otro component para que active la llamada a la api

        const climaSearch = async() => {
            const API_key = `57af88bb365e369ab95af85948e34389` //clave api generada con el user
            const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=${API_key}&units=metric&lang=sp`)
            const datos = respuesta.data.main
            const datos2  = respuesta.data.weather
           
            setResultadoApi(datos)
            setResultadoApi2(datos2)
          
            setValorProp(valor)
            console.log(respuesta)
           
            

         }

    return(
        <>
        <div className='nav'>
            <div className='contNav'>
                <div className='contSvg'>
                <motion.h1 
                
                   className='titulo'>ClimaAPP</motion.h1> 
                {/*<motion.svg className='iconoSvg' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"  viewBox="0 0 16 16"  initial="hidden" animate="visible" >  
                    <motion.path variants={pathVariantes} d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                    <motion.path variants={pathVariantes} d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </motion.svg>*/}

<motion.svg className='iconoSvg' xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"  viewBox="0 0 16 16"  initial="hidden" animate="visible" >
  <motion.path variants={pathVariantes}  d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" />
  <motion.path variants={pathVariantes}  d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z" />
</motion.svg>


                </div>
               

                <div className='contInput'>
                    <input type="text" onChange={e=>setValor(e.target.value)} />
                    <button className='btn'onClick={()=>climaSearch()}>Search</button> 
                </div>
            

            </div>


        </div>

       {resultadoApi.length!=0&& <Hero resultadoApi={resultadoApi}  ciudad={valorProp} resultadoApi2={resultadoApi2}  />}
        </>
    )
}

export { Navbar }