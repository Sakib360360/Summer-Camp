import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from '../../../Components/Chart';
import useClasses from '../../../Hooks/useClasses';
import useManageUsers from '../../../Hooks/useManageUsers';
import useInstructorsAll from '../../../Hooks/useInstructorsAll';
import useAxios from '../../../Hooks/useAxios';


const AdminHome = () => {
    const [classes,] = useClasses()
    const [manageAllUsers,,] = useManageUsers()
    const [instructors, ]= useInstructorsAll()
    const [enrolled,setEnrolled] = useState([])
    const [axiosInstance] = useAxios()
    useEffect(()=>{
        axiosInstance.get('/enrolledClasses')
        .then(res=>{
            setEnrolled(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <Helmet>
                <title>Language-Camp|Admin Home</title>
            </Helmet>
            <div className='flex justify-center items-center'>
            <Chart name1={'Total Classes'} value1={classes.length} name2={'Total Users'} value2={manageAllUsers.length} name3={'Total Instructors'} value3={instructors.length} name4={'Total Enrolled Students'} value4={enrolled.length}></Chart>
            </div>
            
        </div>
    );
};

export default AdminHome;