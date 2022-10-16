import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex w-screen justify-center py-1 z-50 fixed bg-white'>
            <div className='flex w-11/12 justify-between items-center'>
                <Link to="/">
                    <img className='h-20' src={logo} alt="" />
                </Link>

                <ul className='flex gap-6'>
                    <li>
                        <a className='uppercase font-semibold text-gray-600 hover:text-gray-800' href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a className='uppercase font-semibold text-gray-600 hover:text-gray-800' href="#quienes-somos">Quienes somos</a>
                    </li>
                    <li>
                        <a className='uppercase font-semibold text-gray-600 hover:text-gray-800' href="">Servicios</a>
                    </li>
                    <li>
                        <a className='uppercase font-semibold text-gray-600 hover:text-gray-800' href="">Clientes</a>
                    </li>
                    <li>
                        <a className='uppercase font-semibold text-gray-600 hover:text-gray-800' href="">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar