import React from 'react';
import useClasses from '../../Hooks/useClasses';
import Card from '../../Components/Card';

const Classes = () => {
    const [classes, refetch] = useClasses()
    return (
        // TODO classes bannar and disghn this page
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                classes.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default Classes;