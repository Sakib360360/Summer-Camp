import React from 'react';
import useInstructorsAll from '../../Hooks/useInstructorsAll';
import InstructorsCard from '../../Components/InstructorsCard';

const Instructors = () => {
    const [instructors,refetch] = useInstructorsAll()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                instructors.map(item=><InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;