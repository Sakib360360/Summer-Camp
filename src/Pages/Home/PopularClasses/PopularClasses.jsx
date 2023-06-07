import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Card from '../../../Components/Card';
import useClasses from '../../../Hooks/useClasses';

const PopularClasses = () => {
  const [classes,refetch] = useClasses()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {
        classes.map(item => <Card key={item._id} item={item}></Card>)
      }
    </div>
  );
};

export default PopularClasses;