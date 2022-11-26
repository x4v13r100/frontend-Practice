import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import imagenOlvide from '../../assets/imagen-olvide.png'
import logo from '../../assets/broncos.png'


const OlvidePassword = () => {
    return (
        <>
            <div className="flex w-full py-15 px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col justify-center items-center lg:w-2/4 mr-10 ">
                    <div>
                        <img
                            className="mx-auto h-14 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Recupera tu cuenta
                        </h2>
                        <p>
                            Ingresa un correo electronico valido
                        </p>

                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="ej: correo@correo.com"
                                />
                            </div>

                        </div>

                        <div className="flex items-center justify-between">


                            <div className="text-sm">
                                <Link to="/" className='font-medium text-indigo-600 hover:text-indigo-500'>Ya tengo cuenta.    </Link>
                                <Link to="/registro" className='font-medium text-gray-500 hover:text-indigo-500'> No tengo cuenta.</Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                value="Enviar"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div className='h-screen w-0 lg:w-full'>
                    <img src={imagenOlvide} alt="imagen login" className='h-full w-screen' />
                </div>
            </div>

        </>
        
    )
}

export default OlvidePassword