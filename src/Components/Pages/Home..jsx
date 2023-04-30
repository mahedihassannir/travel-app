import React from 'react';

import '../Css/Header.css'
import '../Css/Home.css'

// swipper starts
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CoxBazer from '../shared/CoxBazer';

const Home = () => {
    return (
        <div className=' bg-background -mt-24   '>
            <div className='  flex items-center w-full h-screen'>
                <CoxBazer></CoxBazer>

                <div className='w-1/2'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className='cart2 rounded-lg  border-2 '>
                                <h1 className='text-white text-2xl sonderban pt-[370px] pb-2 pl-5'>Cox’s  Bazar</h1>

                            </div>
                        </SwiperSlide>

                        {/* ends */}
                        <SwiperSlide >
                            <div className='cart3 mx-5'>
                                <h1 className='text-white text-2xl sonderban pt-[370px] pb-2 pl-5'>Sreemangal</h1>

                            </div>


                        </SwiperSlide>
                        {/* ends */}
                        <SwiperSlide>
                            <div className='cart1 ml-10'>
                                <h1 className='text-white text-2xl sonderban pt-[370px] pb-2 pl-5'>Sundarbans</h1>

                            </div>




                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='cart4 ml-14'>
                                <h1 className='text-white text-2xl sonderban pt-[370px] pb-2 pl-5'>lkojuhioluh</h1>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='cart5 ml-20'>
                                <h1 className='text-white text-2xl sonderban pt-[370px] pb-2 pl-5'>lkojuhioluh</h1>

                            </div>

                        </SwiperSlide>


                    </Swiper>

                </div>

            </div>





        </div>
    );
};

export default Home;