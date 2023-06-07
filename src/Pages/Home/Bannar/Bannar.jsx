import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Bannar = () => {
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
                    <div>
                        <img src="https://www.expatica.com/app/uploads/sites/14/2020/01/science-class-school-saudi-arabia.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://www.expatica.com/app/uploads/sites/14/2020/01/science-class-school-saudi-arabia.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://www.expatica.com/app/uploads/sites/14/2020/01/science-class-school-saudi-arabia.jpg" alt="" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Bannar;