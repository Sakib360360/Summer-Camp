import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>

                <div className='container flex flex-col items-center justify-center  px-5 mx-auto my-8'>
                    <img className='relative h-screen' src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp" alt="" />
                    <div className='max-w-md text-center absolute bottom-8 content-center'>
                        <h2 className='mb-8 font-extrabold text-7xl text-gray-600'>
                            
                        </h2>
                        <p className='text-2xl font-semibold text-orange-500 md:text-2xl mt-20'>
                            {error?.message}
                        </p>

                        <button className="btn btn-warning "> <Link
                            to='/'
                            className='flex'
                        >
                            <FaArrowLeft></FaArrowLeft> <span>Homepage</span>
                        </Link></button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ErrorPage