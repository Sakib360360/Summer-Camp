import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [status,setStatus] = useState('pending')

    const [axiosInstance] = useAxiosSecure()
    const [allClasses, setAllClasses] = useState([])
    useEffect(() => {
        axiosInstance.get('/allClasses')
            .then(response => {
                setAllClasses(response.data)
            })
    }, [])


    // handle approve
    const handleApprove =(item)=>{
        console.log(item)
        const status = 'approved'
        axiosInstance.put(`/updateStatus/${item._id}`,{status} )
        .then(response=>{
            if(response.data.modifiedCount){
                Swal.fire('Approved')
                setStatus('approved')
            }
        })
        .catch(error=>console.log(error))
    }
    // handle deny
    const handleDeny = (item)=>{
        const status = 'deny'
        axiosInstance.put(`/updateStatus/${item._id}`,{status} )
        .then(response=>{
            if(response.data.modifiedCount){
                Swal.fire('Denied')
                setStatus('denied')
            }
        })
        .catch(error=>console.log(error))
    }
    console.log(allClasses)
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
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((item, index) => <tr key={item._id}>
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
                                <td><button disabled={item.status === 'pending'? false : true} onClick={()=>handleApprove(item)} className='btn btn-success btn-sm'>Approve</button></td>
                                <td><button disabled={item.status === 'pending'? false : true} onClick={()=>handleDeny(item)} className='btn btn-sm btn-error'>Deny</button></td>
                                {/* TODO: onclick show more */}
                                <td><button  className='btn btn-sm'>Send Feedback</button></td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;