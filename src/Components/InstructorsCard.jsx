import React from 'react';

const InstructorsCard = ({item}) => {
    const {instructorEmail,instructorImage,instructorName,role,takenClass} = item
    return (
        <div>
            <div className="card w-80 bg-base-100">
                <figure><img className="" src={instructorImage} alt="Profile picture is not uploaded" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructorName}</h2>
                    <p>Taken Class:{takenClass}</p>
                    <p>Instructor Email:{instructorEmail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;