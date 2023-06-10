import React, { useEffect, useState } from 'react';
import useInstructorsAll from '../../../Hooks/useInstructorsAll';
import InstructorsCard from '../../../Components/InstructorsCard';
import useAxios from '../../../Hooks/useAxios';


const PopularInstructors = () => {
    const [instructors, refetch] = useInstructorsAll()
    const [enrolledClasses, setEnrolledClasses] = useState([])
    const [axiosInstance] = useAxios()
    useEffect(() => {
        axiosInstance.get('/enrolledClasses')
            .then(res => {
                setEnrolledClasses(res.data)
            })
            .catch(error => console.log(error))
    }, [])
    // const token = localStorage.getItem('access-token');




    // sorting the enrolled classes instructors
    const instructorCounts = enrolledClasses.reduce((counts, { classInstructor }) => {
        counts[classInstructor] = (counts[classInstructor] || 0) + 1;
        return counts;
    }, {});

    const uniqueInstructors = [...new Set(enrolledClasses.map((obj) => obj.classInstructor))];

    uniqueInstructors.sort((a, b) => instructorCounts[b] - instructorCounts[a]);

    console.log(uniqueInstructors);



    // sorting the instructors
    instructors.sort((a, b) => {
        const instructorA = a.instructorName.split(' ')[0];
        const instructorB = b.instructorName.split(' ')[0];
      
        const indexA = uniqueInstructors.indexOf(instructorA);
        const indexB = uniqueInstructors.indexOf(instructorB);
      
        return indexA - indexB;
      });

    console.log('new instructors', instructors)
    console.log('enrolled', enrolledClasses)

    return (
        <div className='grid grid-cols-1 mx-auto md:grid-cols-4 gap-4 mt-8'>
            
            {
                instructors.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
        </div>
    );
};

export default PopularInstructors;