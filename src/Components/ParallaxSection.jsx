import React from 'react';

const ParallaxSection = () => {
    return (
        <div>
            <div className='featured-items bg-[url("https://img.emg-services.net/searchtexts/searchtext694/canva-photo-editor.png")] bg-fixed bg-cover h-[400px]  w-full mx-auto'>
                <div className='bg-sky-400 opacity-50 h-full'>
                    
                    <div className='flex justify-center  items-center'>
                        <div className='text-black flex flex-col mt-32 justify-center  '>
                            <h1 className='text-3xl text-center font-bold'>STARTING ONLINE LEARNING</h1>
                            <p className='text-2xl text-center font-semibold'>ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES</p>
                            
                            <div className='flex justify-center my-8'>
                                <button className='btn btn-outline border-0 border-l-2 border-r-2 text-black uppercase'>Get Started Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxSection;