import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Bannar.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { Autoplay, Pagination, Navigation } from "swiper";

const Bannar = () => {
    const variants1 = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    const variants2 = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    const variants3 = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <>
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
                    <div className='relative'>
                        <img className='max-h-screen w-full' src="https://www.expatica.com/app/uploads/sites/14/2020/01/science-class-school-saudi-arabia.jpg" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                            <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants1}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Learn from anywhere</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants2}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>Learn Different languages with our native instructos</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants3}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <div className='flex justify-center mt-8'>
                                            <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>



                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='max-h-screen w-full' src="https://img.emg-services.net/searchtexts/searchtext694/canva-photo-editor.png" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                            <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants1}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Explore Different Languages</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants2}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>With our support and your dedication </h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants3}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <div className='flex justify-center mt-8'>
                                            <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>



                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='max-h-screen w-full' src="https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                            <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants1}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Learn from anywhere</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants2}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>Learn Different languages with our native instructos</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants3}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <div className='flex justify-center mt-8'>
                                            <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>



                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='max-h-screen w-full' src="https://img.emg-services.net/searchtexts/searchtext694/canva-photo-editor.png" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-500">
                            <div className='absolute top-1/3 left-8 md:top-1/3 md:left-32 '>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants1}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='md:text-6xl text-4xl text-center text-white font-semibold custom-font'>Join The Classes</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants2}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <h1 className='text-3xl md:text-5xl custom-font text-white text-center'>Learn Different languages with our native instructos</h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                    <motion.div
                                        className=" transform -translate-y-1/2"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants3}
                                        transition={{ duration: 1.5 }}
                                    >
                                        <div className='flex justify-center mt-8'>
                                            <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold px-12 rounded-3xl'>Get Started</button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>



                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </>
    );
};

export default Bannar;