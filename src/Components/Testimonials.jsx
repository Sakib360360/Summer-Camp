import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";


import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    return (
        <div className='w-3/4 rounded-xl shadow-xl bg-[url("https://static.vecteezy.com/system/resources/thumbnails/001/884/546/small/abstract-grunge-decorative-blue-dark-wall-background-dark-blue-concrete-backgrounds-with-rough-texture-dark-wallpaper-space-for-text-use-for-decorative-design-web-page-banner-frames-wallpaper-free-photo.jpg")] mx-auto my-8'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <FaQuoteLeft className='text-white mt-8 ml-8 text-4xl'></FaQuoteLeft>
                    <div className='w-5/6 mx-auto py-5'>
                        <p className='text-center text-white'>I recently attended a Language Camp to learn Spanish, and I must say it was an incredible experience. The camp provided a comprehensive and immersive environment for learning the language, and I came away with valuable skills and knowledge that exceeded my expectations.</p>
                        
                        <h1 className='text-center text-yellow-600 text-2xl my-4'>Tom</h1>
                    </div>
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={'4'}
                            readOnly
                            className='float-right mr-8 py-5'
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <FaQuoteLeft className='text-white mt-8 ml-8 text-4xl'></FaQuoteLeft>
                    <div className='w-5/6 mx-auto py-5'>
                        <p className='text-center text-white'>I had the pleasure of attending a Language Camp to learn French, and I can confidently say it was an incredible and transformative experience. The camp provided a truly immersive environment that allowed me to rapidly improve my Spanish language skills while immersing myself in the rich and vibrant culture.</p>
                        
                        <h1 className='text-center text-yellow-600 text-2xl my-4'>HJ. Jack</h1>
                    </div>
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={'4.5'}
                            readOnly
                            className='float-right mr-8 py-5'
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <FaQuoteLeft className='text-white mt-8 ml-8 text-4xl'></FaQuoteLeft>
                    <div className='w-5/6 mx-auto py-5'>
                        <p className='text-center text-white'>The Arabic instructors at the camp were exceptional. Their deep knowledge of the language, combined with their passion for teaching, created a highly effective and engaging learning experience. They employed various teaching methods that catered to different learning styles, ensuring that every student could grasp the complexities of the language. The instructors were patient, supportive, and always encouraged us to practice speaking Arabic, building our confidence and fluency throughout the program.</p>
                        
                        <h1 className='text-center text-yellow-600 text-2xl my-4'>Abdullah Mahommad</h1>
                    </div>
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={'5'}
                            readOnly
                            className='float-right mr-8 py-5'
                        />

                    </div>
                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default Testimonials;