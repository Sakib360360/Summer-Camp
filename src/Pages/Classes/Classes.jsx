import React from 'react';
import useClasses from '../../Hooks/useClasses';
import Card from '../../Components/Card';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle';

const Classes = () => {
    const [classes, refetch] = useClasses()
    return (
        <>
            <div className='relative'>
                <img className='max-h-screen w-full' src="https://img.emg-services.net/searchtexts/searchtext694/canva-photo-editor.png" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                    <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>

                        <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Attend every class to learn with us</h1>


                        <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>Learn Different languages & practice with your classmates</h1>


                        <div className='flex justify-center mt-8'>
                            <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                        </div>




                    </div>
                </div>
            </div>
            <SectionTitle head={'Our Classes'}></SectionTitle>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 mb-12 gap-6'>
                    <Helmet>
                        <title>Language-Camp|Classes</title>
                    </Helmet>
                    {
                        classes.map(item => <Card key={item._id} item={item}></Card>)
                    }
                </div>
            </div>
        </>

    );
};

export default Classes;