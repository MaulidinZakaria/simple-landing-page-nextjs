/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/custom-swiper.css';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const TestimoniSection = () => {

    useGSAP(() => {
        gsap.from('.title-sec-5', {
            scrollTrigger: {
                trigger: '.title-5',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: -100,
            opacity: 0,
        })

        gsap.from('.subtitle-sec-5', {
            scrollTrigger: {
                trigger: '.title-5',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: 100,
            opacity: 0,
        })

        gsap.from('.box-testi', {
            scrollTrigger: {
                trigger: '.box-testi',
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: 1,
            },
            y: 150,
            opacity: 0,
        })
       
    });

    return (
        <section className="w-full flex flex-col font-space_grotesk px-36 gap-3 overflow-hidden section-5 pt-4 pb-12" id="testimonials">
            <div className="flex items-center justify-start pt-14 pb-10 gap-10 title-5">
                <div className="bg-[#BAFF66] text-black text-5xl rounded-md p-2 title-sec-5">Testimonials</div>
                <div className="text-black w-[50%] text-xl subtitle-sec-5">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </div>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                centeredSlides={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full h-[75vh] bg-black rounded-[45px] shadow-xl !py-16 box-testi"
            >
                <SwiperSlide className="w-[500px] h-fit flex flex-col justify-between">
                    <div className="w-full h-[350px] relative pb-4">
                        <img src="/comment-bg.png" alt="" className="h-[95%] object-cover absolute z-[1] left-0" />
                        <div className="h-[90%] w-[90%] flex justify-center items-center !px-12">“Working with BlueZ was a game-changer for our business. Their performance marketing strategies helped us reach a wider audience and improve our conversion rates.”</div>
                    </div>
                    <div className="px-4 text-2xl text-[#BAFF66] font-medium">John Smith</div>
                    <div className="px-4 text-lg">CEO and Founder</div>
                </SwiperSlide>
                <SwiperSlide className="w-[500px] h-fit flex flex-col justify-between">
                    <div className="w-full h-[350px] relative pb-4">
                        <img src="/comment-bg.png" alt="" className="h-[95%] object-cover absolute z-[1] left-0" />
                        <div className="h-[90%] w-[90%] flex justify-center items-center !px-12">“Working with BlueZ was a game-changer for our business. Their performance marketing strategies helped us reach a wider audience and improve our conversion rates.”</div>
                    </div>
                    <div className="px-4 text-2xl text-[#BAFF66] font-medium">John Smith</div>
                    <div className="px-4 text-lg">CEO and Founder</div>
                </SwiperSlide>
                <SwiperSlide className="w-[500px] h-fit flex flex-col justify-between">
                    <div className="w-full h-[350px] relative pb-4">
                        <img src="/comment-bg.png" alt="" className="h-[95%] object-cover absolute z-[1] left-0" />
                        <div className="h-[90%] w-[90%] flex justify-center items-center !px-12">“Working with BlueZ was a game-changer for our business. Their performance marketing strategies helped us reach a wider audience and improve our conversion rates.”</div>
                    </div>
                    <div className="px-4 text-2xl text-[#BAFF66] font-medium">John Smith</div>
                    <div className="px-4 text-lg">CEO and Founder</div>
                </SwiperSlide>
                <SwiperSlide className="w-[500px] h-fit flex flex-col justify-between">
                    <div className="w-full h-[350px] relative pb-4">
                        <img src="/comment-bg.png" alt="" className="h-[95%] object-cover absolute z-[1] left-0" />
                        <div className="h-[90%] w-[90%] flex justify-center items-center !px-12">“Working with BlueZ was a game-changer for our business. Their performance marketing strategies helped us reach a wider audience and improve our conversion rates.”</div>
                    </div>
                    <div className="px-4 text-2xl text-[#BAFF66] font-medium">John Smith</div>
                    <div className="px-4 text-lg">CEO and Founder</div>
                </SwiperSlide>
                <SwiperSlide className="w-[500px] h-fit flex flex-col justify-between">
                    <div className="w-full h-[350px] relative pb-4">
                        <img src="/comment-bg.png" alt="" className="h-[95%] object-cover absolute z-[1] left-0" />
                        <div className="h-[90%] w-[90%] flex justify-center items-center !px-12">“Working with BlueZ was a game-changer for our business. Their performance marketing strategies helped us reach a wider audience and improve our conversion rates.”</div>
                    </div>
                    <div className="px-4 text-2xl text-[#BAFF66] font-medium">John Smith</div>
                    <div className="px-4 text-lg">CEO and Founder</div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}
export default TestimoniSection