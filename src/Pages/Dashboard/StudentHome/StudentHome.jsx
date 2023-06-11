import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from '../../../Components/Chart';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const StudentHome = () => {
    const [selectedClasses, ] = useSelectedClasses()
    const [axiosInstance] = useAxiosSecure()
    const [enrolledClasses, setEnrolledClasses] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axiosInstance.get(`/enrolledClasses/${user?.email}`)
            .then(response => {
                setEnrolledClasses(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Student Home</title>
            </Helmet>
            <div className='flex  justify-center items-center'>
                <Chart name1={'My Selected Classes'} value1={selectedClasses.length} name2={'My Enrolled Classes'} value2={enrolledClasses.length}></Chart>
            </div>
        </div>
    );
};

export default StudentHome;