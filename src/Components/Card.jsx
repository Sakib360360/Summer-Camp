import React, { useContext, useState } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Card = ({item}) => {
    const {className,seats,classImage,price,classInstructor} = item;
    // const [isAdmin,] = useAdmin()
    // const [isInstructor,] = useInstructor()
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const [disabled,setDisabled] = useState(false)

    
    const handleSelect =(item)=>{
        if(user?.email){
            const selectedClass = {
                selectedClassId:item._id,
                email:user?.email,
                className,classImage,classInstructor,price,seats
            }
            // posting selected class in the server
            axiosInstance.post('/selectedClasses',selectedClass)
            .then(response=>{
                if(response.data.insertedId){
                    Swal.fire("Selected")
                }
            })
        }
    }
    return (
        <div className={`card w-80 bg-base-100 ${item.seats <1 && 'bg-red-200'}`}>
            <figure><img className="" src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor:{classInstructor}</p>
                <p>Seats:{seats}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <button disabled={ item.seats<1 ? true : false} onClick={()=>handleSelect(item)} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;