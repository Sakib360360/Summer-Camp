import React from 'react';
import useInstructorsAll from '../../Hooks/useInstructorsAll';
import InstructorsCard from '../../Components/InstructorsCard';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle';

const Instructors = () => {
    const [instructors, refetch] = useInstructorsAll()
    return (
        <>
            <div>
                <div className='relative'>
                    <img className='max-h-screen w-full' src="https://languagesconnect.ie/wp-content/uploads/2021/07/PPLI-iStock-1177608272-1024x683.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                        <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>

                            <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Learn from our native instructors</h1>


                            <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>Learn Different languages & practice with your classmates</h1>


                            <div className='flex justify-center mt-8'>
                                <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            <SectionTitle head={'Our Instructors'}></SectionTitle>
            <div className='flex justify-center'>
                <div className='grid mx-auto grid-cols-1 md:grid-cols-4 mb-12 gap-4'>
                    <Helmet>
                        <title>Language-Camp|Instructors</title>
                    </Helmet>

                    {
                        instructors.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;