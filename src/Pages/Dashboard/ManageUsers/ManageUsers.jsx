import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useManageUsers from '../../../Hooks/useManageUsers';

const ManageUsers = () => {
    const { user } = useContext(AuthContext)
    const [manageAllUsers, isManageUsersLoading, refetch] = useManageUsers()
    console.log(manageAllUsers)
    return (
        <div>
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
                                
                                <td><button   className='btn btn-success btn-sm'>Instructor</button></td>
                                <td><button   className='btn btn-sm btn-error'>Admin</button></td>
                                
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;