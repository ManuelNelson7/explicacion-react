import React from 'react'
import Card from './Card'
import { servicios } from '../utils/servicios'


const Servicios = () => {


    return (
        <div className='bg-gray-200 justify-center'>
            <div className='max-w-7xl mx-auto px-4 py-4'>
                <div>
                    <h4 className='text-center pb-6 font-semibold text-gray-600 text-2xl md:text-3xl'>Servicios</h4>
                    <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8 md:px-10'>
                        {
                            servicios.map((servicio, index) => {
                                return (
                                    <Card
                                        key={index}
                                        titulo={servicio.titulo}
                                        img={servicio.img}
                                        url={servicio.url}
                                    />
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Servicios