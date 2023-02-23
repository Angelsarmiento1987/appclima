

import React from 'react';
import './Hero.css'

const Hero = (props,ciudad) => {

    const urlIconos = ` http://openweathermap.org/img/wn/${props.resultadoApi2[0].icon}@2x.png`

    return(
        <div className='contGeneralInfo'>

            <div className='contInfoA'>

                <div className='contDato'><h1 className='ciudad'>En {props.ciudad}:</h1></div>
                <div className='contDato'><h2>La temperatura es de <span>{props.resultadoApi.temp}ºC</span></h2></div>
                <div className='contDato'><h2>La sensacion termica de <span>{props.resultadoApi.feels_like}ºC</span> </h2></div>
                <div className='contDato'><h2>La humedad es del <span>{props.resultadoApi.humidity}%</span> </h2></div>
                <div className='contDato'><h2>La presion es de <span>{props.resultadoApi.pressure} hPa</span> </h2></div>
                <div className='cielo'>
                    <h2>Cielo: <span>{props.resultadoApi2[0].description} </span> </h2>
                    <img className='cieloImg' src={urlIconos} alt="" />
                </div>
                
               
             

            </div>

            
            


        </div>
    )
}

export { Hero }