import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const MyClasses = () => {
    const [axiosInstance] = useAxiosSecure()
    const [myClasses, setMyClasses] = useState([])
    const { user,setHandleUpdateData } = useContext(AuthContext)
    const [feedback, setFeedback] = useState('')
    const navigate = useNavigate()


    // console.log(myClasses)
    useEffect(() => {
        axiosInstance.get(`/myClasses/${user.email}`)
            .then(response => {
                // console.log(response.data)
                setMyClasses(response.data)
            })
    }, [])
    const feedbackShow = (feedback) => {
        setFeedback(feedback)
    }



    const handleUpdate = (item) => {
        setHandleUpdateData(item)
        navigate('/dashboard/updateAClass')
    }


    return (
        <div>
            <Helmet>
                <title>Language-Camp|My Classes</title>
            </Helmet>
            {/* modal show feedback */}
            <div className="modal" id="my_modal_8">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Feedback from Admin</h3>
                    <p className="py-4">{feedback}</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Close</a>
                    </div>
                </div>
            </div>
            {/* {modal update} */}
            
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
                            <th>Update</th>
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
                                <td><button className='' onClick={()=>handleUpdate(item)}>Update</button></td>
                                <td>{item.status}</td>
                                {/* TODO: onclick show more */}
                                <td><button  onClick={() => feedbackShow(item.feedback)}><a href="#my_modal_8" className="btn" disabled={item.status === 'pending'}>See Feedback</a></button></td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;