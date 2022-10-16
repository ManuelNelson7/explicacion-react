import React from 'react'
import {Link} from 'react-router-dom'

const Contenido = ({ titulo, img, parrafo1, parrafo2, id }) => {


    return (
        <section id={id}>
            <div className='flex flex-col md:grid md:grid-cols-2 contenido'>

                <div className='div-contenido'>
                    <img
                        src={img}
                        alt={titulo}
                        className='imagen-contenido' />
                </div>

                <div className='flex flex-col gap-4 items-center w-full'>
                    <div className='flex flex-col gap-4 px-12 py-14 justify-center h-full w-10/12'>
                        <h2 className='text-4xl font-semibold text-gray-600'>{titulo}</h2>

                        <p className='font-semibold text-gray-500'>{parrafo1}</p>

                        <p className='text-gray-500'>{parrafo2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contenido