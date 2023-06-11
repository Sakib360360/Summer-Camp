import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useManageUsers from '../../../Hooks/useManageUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaChalkboardTeacher,FaUserTie } from "react-icons/fa";

const ManageUsers = () => {
    const { user } = useContext(AuthContext)
    const [manageAllUsers, isManageUsersLoading, refetch] = useManageUsers()
    const [axiosInstance] = useAxiosSecure()
    const [disableInstructor,setDisableInstructor] = useState('')
    const [disableAdmin,setDisableAdmin] = useState('')
    // console.log(manageAllUsers)
    const makeInstructor=(item)=>{
        const role = 'instructor'
        axiosInstance.put(`/manageUsers/${item._id}`,{role})
        .then(response=>{
            if(response.data.modifiedCount>0){
                Swal.fire(`${item.name} is instructor now.`)
                setDisableInstructor(item._id)
                setDisableAdmin('')
                refetch()
            }
        })
        .catch(error=>console.log(error))
    }
    // TODO:disable fucnt
    const makeAdmin=(item)=>{
        const role = 'admin'
        axiosInstance.put(`/manageUsers/${item._id}`,{role})
        .then(response=>{
            if(response.data.modifiedCount>0){
                Swal.fire(`${item.name} is Admin now.`)
                setDisableAdmin(item._id)
                setDisableInstructor('')
                refetch()
            }
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Manage Users</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageAllUsers.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.role || 'student'}</td>
                                
                                <td><button disabled={item._id === disableInstructor || item.role === 'instructor'} onClick={()=>makeInstructor(item)} className='btn btn-success btn-sm'><FaChalkboardTeacher></FaChalkboardTeacher>Instructor</button></td>
                                <td><button disabled={item._id === disableAdmin || item.role === 'admin'}  onClick={()=>makeAdmin(item)} className='btn btn-sm btn-success'><FaUserTie></FaUserTie>Admin</button></td>
                                
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;