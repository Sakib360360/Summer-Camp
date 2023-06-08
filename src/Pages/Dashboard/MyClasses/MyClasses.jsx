import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProviders';

const MyClasses = () => {
    const [axiosInstance] = useAxiosSecure()
    const [myClasses, setMyClasses] = useState([])
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
            {/* show all in table */}
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
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Total Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((item, index) => <tr key={item._id}>
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
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.enrolledStudent}</td>
                                <td>{item.status}</td>
                                {/* TODO: onclick show more */}
                                <td>{item.feedback}</td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;