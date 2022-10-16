import React from 'react'
import Contenido from '../components/Contenido'
import Servicios from '../components/Servicios'
import { servicios } from '../utils/servicios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
    return (
        <>
            <div className='pt-20'>

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                >
                    {servicios.map((servicio) => {
                        return (
                            <SwiperSlide>
                                <div className='w-full h-96 md:h-slider flex justify-center items-center relative bg-red-500'>
                                    <div className='z-10 flex flex-col justify-center items-center md:mt-20 gap-3 md:gap-6'>
                                        <h1 className='text-white font-bold text-center text-2xl md:text-4xl'>{servicio.titulo}</h1>
                                        <p className='text-white text-center w-10/12 md:w-100'>{servicio.resumen}</p>
                                        <a href="/#formulario" className='bg-white py-2.5 px-6 hover:bg-gray-200 transition-all duration-150'>Consultar</a>
                                    </div>
                                    <div className='w-full h-96 md:h-slider absolute'>
                                        <img src={servicio.img} alt={servicio.titulo} className='w-full h-full object-cover object-center brightness-50 -z-10' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    id='inicio'
                >
                    {servicios.map((servicio) => {
                        return (
                            <SwiperSlide>
                                <div className='w-full h-96 md:h-slider flex justify-center items-center relative'>
                                    <div className='z-10 flex flex-col justify-center items-center gap-6 mt-20'>
                                        <h1 className='text-white font-bold text-center text-2xl md:text-3xl'>{servicio.titulo}</h1>
                                        <p className='text-white md:text-xl w-9/12 text-center'>{servicio.resumen}</p>
                                        <a href="/#formulario" className='bg-white py-2.5 px-6 hover:bg-gray-200 font-semibold'>Consultar</a>
                                    </div>
                                    <div className='w-full h-96 md:h-slider absolute'>
                                        <img src={servicio.img} alt="" className='w-full h-full object-cover object-center brightness-50 -z-10' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper> */}

                <Contenido
                    titulo='¿Quienes somos?'
                    img='https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    parrafo1='SERENDIPIA es un emprendimiento joven, conformada a principios del 2015 por un grupo de jóvenes profeisonales, con la intención de potenciar en una misma organización recursos humanos y técnicos en las áreas de Seguridad y Salud, Medio Ambiente y Calidad'
                    parrafo2='Brindamos soluciones integrales a medida, bajo la premisa de fidelizar a cada cliente, acompañándolo en sus desafíos, colaborando con su desempeño y rentabilidad, y resguardando sus intereses.'
                />

                <Servicios />

            </div>
        </>
    )
}

export default Home