import React, { useEffect, useState } from 'react';
import Card from '../../../Components/Card';
// import useInstructor from '../../../Hooks/useInstructor';
import useAxios from '../../../Hooks/useAxios';
// import useAdmin from '../../../Hooks/useAdmin';

const PopularClasses = () => {
  const [axiosInstance] = useAxios()
  // const [isInstructor, ] = useInstructor()
  const [enrolledClasses, setEnrolledClasses] = useState([])
  // const [isAdmin,] = useAdmin()
  

  useEffect(() => {
    axiosInstance.get('/enrolledClasses')
      .then(res => {
        setEnrolledClasses(res.data)
      })

  }, [])


  // sorted calsses
  const classNameCounts = enrolledClasses.reduce((counts, { className }) => {
    counts[className] = (counts[className] || 0) + 1;
    return counts;
  }, {});

  const uniqueClassNames = [...new Set(enrolledClasses.map((obj) => obj.className))];

  uniqueClassNames.sort((a, b) => classNameCounts[b] - classNameCounts[a]);

  const sortedObjects = uniqueClassNames.map((className) =>
    enrolledClasses.find((obj) => obj.className === className)
  );

  // console.log(sortedObjects);



  return (
    <div className='flex justify-center mb-12'>
      <div className='grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-6'>
        {
          sortedObjects.slice(0,6).map(item => <Card key={item._id} item={item}></Card>)
        }
      </div>
    </div>
  );
};

export default PopularClasses;