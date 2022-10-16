import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Contenido from '../components/Contenido'
import { servicios } from '../utils/servicios'

const Servicio = () => {
    const { url } = useParams()
    const [data, setData] = useState({});

    useEffect(() => {
        let servicioElegido = servicios.find(servicio => servicio.url === url)
        setData(servicioElegido)
    }, [url])

    return (
        <div className='pt-20'>
            <Contenido
                img={data.img}
                titulo={data.titulo}
                id={data.url}
                parrafo1={data.parrafo1}
            />

            <div className='min-h-56 w-full pt-4 bg-teal-800'>
                Contacto
            </div>
        </div>
    )
}

export default Servicio