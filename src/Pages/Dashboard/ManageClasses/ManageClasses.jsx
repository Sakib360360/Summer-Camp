import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useManageClasses from '../../../Hooks/useManageClasses';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageClasses = () => {
    const [status, setStatus] = useState('pending')
    const [enrolledClasses, setEnrolledClasses] = useState([])
    const { user } = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const [allClasses, refetch] = useManageClasses()
    const [textareaValue, setTextareaValue] = useState('');
    const [sendItem,setSendItem] = useState({})


    // handle approve
    const handleApprove = (item) => {
        console.log(item)
        const status = 'approved'
        axiosInstance.put(`/updateStatus/${item._id}`, { status })
            .then(response => {
                if (response.data.modifiedCount) {
                    Swal.fire('Approved')
                    setStatus('approved')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }
    // handle deny
    const handleDeny = (item) => {
        const status = 'deny'
        axiosInstance.put(`/updateStatus/${item._id}`, { status })
            .then(response => {
                if (response.data.modifiedCount) {
                    Swal.fire('Denied')
                    setStatus('denied')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }
    // handle feedback
    const handleSendFeedback = (item)=>{
        setSendItem(item)
    }
    const handleFeedback = () => {
        const feedback =textareaValue;
        axiosInstance.put(`/sendFeedback/${sendItem._id}`,{feedback})
        .then(response => {
            if (response.data.modifiedCount>0) {

                Swal.fire('Sent')
                refetch()
            }
        })
        .catch(error => console.log(error))


    }




    useEffect(() => {
        axiosInstance.get(`/enrolledClasses`)
            .then(response => {
                setEnrolledClasses(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    // console.log(allClasses,enrolledClasses)
    const matchingIds = enrolledClasses.filter(item => {
        const selectedId = item.selectedId;
        return allClasses.some(obj => obj.id === selectedId);
      });
      
      const totalCount = matchingIds.length;
      
    //   console.log(totalCount);





    return (
        <div>
            <Helmet>
                <title>Language-Camp|Manage Classes</title>
            </Helmet>
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
                            <th></th>
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
                                <td>{item.instructorEmail}</td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.status}</td>
                                <td><button disabled={item.status === 'pending' ? false : true} onClick={() => handleApprove(item)} className='btn btn-success btn-sm'>Approve</button></td>
                                <td><button disabled={item.status === 'pending' ? false : true} onClick={() => handleDeny(item)} className='btn btn-sm btn-error'>Deny</button></td>
                                {/* TODO: onclick show more */}
                                <>
                                    <div className="modal" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Send feedback !</h3>

                                            <textarea onChange={(e) => setTextareaValue(e.target.value)} className='border-black border' name="feedback" id="" cols="60" rows="5"></textarea>
                                            <div className="modal-action">
                                                <button onClick={handleFeedback} className=""><a href="#" className="btn">Send</a></button>

                                            </div>
                                        </div>
                                    </div>
                                </>
                                <td><button  onClick={()=>handleSendFeedback(item)} className=''><a href="#my_modal_8" disabled={item.status === 'pending' || item.status === 'approved'} className="btn btn-sm">Send Feedback</a></button></td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageClasses;