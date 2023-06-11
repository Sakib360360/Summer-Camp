import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const StudentPaymentHistory = () => {
    const [axiosInstance] = useAxiosSecure()
    const [enrolledClasses, setEnrolledClasses] = useState([])

    enrolledClasses.sort((a, b) => new Date(b.date) - new Date(a.date))


    const { user } = useContext(AuthContext)
    useEffect(() => {
        axiosInstance.get(`/enrolledClasses/${user?.email}`)
            .then(response => {
                setEnrolledClasses(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    console.log(enrolledClasses)
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Payment History</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Pay</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.classImage} />
                                            </div>
                                            <div>
                                                <h1>{item.className}</h1>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.classInstructor}
                                </td>
                                <td><p className=''>Paid</p></td>
                                <td>{item.date}</td>
                            </tr>)
                        }


                        {/*  */}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default StudentPaymentHistory;