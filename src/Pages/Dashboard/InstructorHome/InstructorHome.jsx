import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from '../../../Components/Chart';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const InstructorHome = () => {
    const [myClasses, setMyClasses] = useState([])
    const [axiosInstance] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axiosInstance.get(`/myClasses/${user.email}`)
            .then(response => {
                console.log(response.data)
                setMyClasses(response.data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Language-Camp|Instructor Home</title>
            </Helmet>
            <div className='flex justify-center items-center'>
            <Chart name1={'My Total Classes'} value1={myClasses.length}></Chart>
            </div>
        </div>
    );
};

export default InstructorHome;