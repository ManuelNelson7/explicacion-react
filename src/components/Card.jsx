import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ titulo, img, url }) => {
    return (
        <div className='flex flex-col bg-white hover:-translate-y-1 transition-all duration-200 hover:shadow-xl shadow-black'>
            <div className='h-56'>
                <div className='relative hover:brightness-75'>
                    <div className='w-full h-56 flex absolute top-0 justify-center text-center z-10 items-center'>
                        <h3 className='text-white font-bold text-xl'>{titulo}</h3>
                    </div>
                    <div className='w-full h-56 absolute top-0'>
                        <img src={img} alt="" className='h-56 brightness-75 object-cover w-full' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full items-center py-10'>
                <div className='w-10/12 flex'>

                    <Link
                        className='bg-lime-700 w-full py-1.5 flex justify-center items-center font-semibold text-white hover:bg-lime-800 rounded-md'
                        to={`/servicio/${url}`}
                    >
                        Consultar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card