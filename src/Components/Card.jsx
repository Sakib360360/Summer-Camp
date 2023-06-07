import React from 'react';

const Card = ({item}) => {
    const {className,seats,classImage,price,classInstructor} = item;
    return (
        <div className="card w-80 bg-base-100">
            <figure><img className="" src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor:{classInstructor}</p>
                <p>Seats:{seats}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;