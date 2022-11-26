import React from 'react'
import { Link } from 'react-router-dom'

const Registro = () => {
    return (

        <>
            <div className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Registrar Nuevo Usuario.</h3>
                                <p className="mt-1 text-sm text-gray-600">Ingresar por favor los datos del nuevo usuario.</p>
                                <br/>
                                <Link to="/" className='font-medium text-indigo-700 hover:text-indigo-500'>Ya tengo cuenta.</Link>
                                <br/>
                                <Link to="/olvide-password" className="font-medium text-indigo-700 hover:text-indigo-500">Olvide mi password.</Link>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form >
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">

                                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    id="nombre"
                                                    autoComplete="given-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                // placeholder="eje. Elvin Javier"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                                    Telefono
                                                </label>
                                                <input
                                                    type="number"
                                                    name="telefono"
                                                    id="telefono"
                                                    autoComplete="family-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="+573212345678"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="@"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                    Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    autoComplete="password"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="**********"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                                                    Zona
                                                </label>
                                                <select
                                                    id="direccion"
                                                    name="direccion"
                                                    autoComplete="country-name"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                >
                                                    <option>Uraba</option>
                                                    <option>Santa Marta</option>
                                                    <option>Llanos Orientales</option>
                                                    <option>Internacional</option>
                                                </select>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit" value="Ingresar"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                    <div>
                                        
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
            </div>




        </>
    )
}

export default Registro