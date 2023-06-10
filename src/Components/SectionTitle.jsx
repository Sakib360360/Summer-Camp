import React from 'react';

const SectionTitle = ({head,subHead}) => {
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-center text-3xl font-bold'>{head}</h1>
            <hr className='w-60 my-4 ' />
            <h1 className='text-center text-2xl  font-semibold'>{subHead}</h1>
        </div>
    );
};

export default SectionTitle;