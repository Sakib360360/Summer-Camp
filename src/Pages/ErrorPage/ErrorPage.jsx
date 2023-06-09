import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>

                <div className='container flex flex-col items-center justify-center  px-5 mx-auto my-8'>
                    <img className='relative h-screen' src="https://as2.ftcdn.net/v2/jpg/00/27/61/19/1000_F_27611909_DEWNEQlw22DAA07QnTuN3KkyxYMHBaOF.jpg" alt="" />
                    <div className='max-w-md text-center absolute bottom-8 content-center'>
                        <h2 className='mb-8 font-extrabold text-7xl text-gray-600'>
                            <span className='text-red-600'>Sorry!!! Can't find</span> <span className='text-orange-700'>{status || 404}</span>
                        </h2>
                        <p className='text-2xl font-semibold text-orange-500 md:text-2xl mb-8'>
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