import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt, FaAmazonPay } from 'react-icons/fa';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const StudentSelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses()
    const {setPaymentItem} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const paymentItemPass =(item)=>{
        setPaymentItem(item)
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to delete?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {

            if (result.isConfirmed) {
                axiosInstance.delete(`/selectedClasses/${id}`)
                    .then(response => {
                        // console.log(response)
                        if (response.data.deletedCount > 0) {
                            refetch()
                            Swal.fire('Deleted successfully')
                        }
                    })

            }

            else if (result.isDenied) {
                Swal.fire('Not deleted')
            }
        })
    }
    // console.log(selectedClasses)
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Selected Classes</title>
            </Helmet>
            {/* show all classes in table */}
            {/* table */}
            <div>
                
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
                                <th>Delete</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((item, index) => <tr key={item._id}>
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
                                    <td>
                                        <button onClick={() => handleDelete(item._id)}><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                    <td><Link to='../payment'><button onClick={()=>paymentItemPass(item)}><FaAmazonPay></FaAmazonPay></button></Link></td>
                                </tr>)
                            }


                            {/*  */}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentSelectedClasses;