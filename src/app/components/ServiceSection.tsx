/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export const ServiceSection = () => {

    useGSAP(() => {
        gsap.from(".title-sec-2", {
            y: 40,
            opacity: 0,
            scrollTrigger: {
                trigger: '.section-2',
                scroller: 'body',
                start: 'top 60%',
                scrub: 2,
                end: 'top 0',
                // markers: true,
            }
        })

        gsap.from(".card-one-left", {
            x: -300,
            opacity: 0,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '.card-one-left',
                start: 'top 60%',
                scrub: true,
                end: 'top 50%',
            }
        })

        gsap.from(".card-one-right", {
            x: 300,
            opacity: 0,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '.card-one-right',
                start: 'top 60%',
                scrub: true,
                end: 'top 50%',
            }
        })

        gsap.from(".card-two-left", {
            x: -300,
            opacity: 0,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '.card-two-left',
                start: 'top 60%',
                scrub: true,
                end: 'top 50%',
            }
        })

        gsap.from(".card-two-right", {
            x: 300,
            opacity: 0,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '.card-two-right',
                start: 'top 60%',
                scrub: true,
                end: 'top 50%',
            }
        })
    }, []);

    return (
        <section className="min-h-[100vh] w-[100%] flex flex-col font-space_grotesk px-36 gap-6 overflow-x-hidden section-2" id="services">
            <div className="flex items-center justify-start py-16 gap-10 title-sec-2">
                <div className="bg-[#BAFF66] text-black text-5xl rounded-md p-2">Services</div>
                <div className="text-black w-[50%] text-xl">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </div>
            </div>
            <div className="grid h-[90vh] w-full grid-cols-2 grid-rows-2 gap-x-12 gap-y-10 mb-20 relative">
                <div className="w-full bg-white border-2 border-black rounded-[40px] flex p-12 shadow-[0px_10px_0px_0px_#000] drop-shadow-2xl relative group cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden card-one-left">
                    <div className="w-[50%] h-full flex flex-col justify-between z-[2]">
                        <div className="text-black text-3xl flex flex-col">
                            <div className="bg-[#BAFF66] group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">Search engine</div>
                            <div className="bg-[#BAFF66] group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">optimization</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-black justify-center rounded-full border-black border size-9 p-1 rotate-[20deg] group-hover:rotate-[380deg] transition-all duration-500">
                                <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                            <div className="text-black font-normal text-xl">Learn more</div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center z-[2]">
                        <img src="https://linkyviz-redesign.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh687c0pq%2Fimage%2Fupload%2Fv1696060966%2Ftokyo-volumetric-analytics-in-web-browsers_1_1_eosh8m.png&w=640&q=75" alt="tes" className="w-[85%] object-cover" />
                    </div>
                    <div className="absolute z-[1] w-full h-full bg-[#BAFF66] top-0 left-[-100%] group-hover:left-[0] transition-all duration-500"></div>
                </div>
                <div className="w-full bg-black border-2 border-black rounded-[40px] flex p-12 shadow-[0px_10px_0px_0px_#000] drop-shadow-2xl relative group cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden card-one-right">
                    <div className="w-[50%] h-full flex flex-col justify-between z-[2]">
                        <div className="text-black text-3xl flex flex-col">
                            <div className="bg-white group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">Pay per click</div>
                            <div className="bg-white group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">advertising</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-white justify-center rounded-full border-black border size-9 p-1 rotate-[20deg] group-hover:rotate-[380deg] transition-all duration-500">
                                <svg className="text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                            <div className="text-white group-hover:text-black transition-all duration-500 font-normal text-xl">Learn more</div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center z-[2]">
                        <img src="https://linkyviz-redesign.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh687c0pq%2Fimage%2Fupload%2Fv1696060169%2F2-_1_1_ds4fed.png&w=640&q=75" alt="tes" className="w-[85%] object-cover" />
                    </div>
                    <div className="absolute z-[1] w-full h-full bg-[#BAFF66] top-0 left-[-100%] group-hover:left-[0] transition-all duration-500"></div>
                </div>
                <div className="w-full bg-black border-2 border-black rounded-[40px] flex p-12 shadow-[0px_10px_0px_0px_#000] drop-shadow-2xl relative group cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden card-two-left">
                    <div className="w-[50%] h-full flex flex-col justify-between z-[2]">
                        <div className="text-black text-3xl flex flex-col">
                            <div className="bg-white group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">Social media</div>
                            <div className="bg-white group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">marketing</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-white justify-center rounded-full border-black border size-9 p-1 rotate-[20deg] group-hover:rotate-[380deg] transition-all duration-500">
                                <svg className="text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                            <div className="text-white group-hover:text-black transition-all duration-500 font-normal text-xl">Learn more</div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center z-[2]">
                        <img src="https://linkyviz-redesign.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh687c0pq%2Fimage%2Fupload%2Fv1696060620%2Ftokyo-browser-window-with-emoticon-likes-and-stars-around-transformed_1_pfbqyl.png&w=640&q=75" alt="tes" className="w-[85%] object-cover" />
                    </div>
                    <div className="absolute z-[1] w-full h-full bg-[#BAFF66] top-0 left-[-100%] group-hover:left-[0] transition-all duration-500"></div>
                </div>
                <div className="w-full bg-white border-2 border-black rounded-[40px] flex p-12 shadow-[0px_10px_0px_0px_#000] drop-shadow-2xl relative group cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden card-two-right">
                    <div className="w-[50%] h-full flex flex-col justify-between z-[2]">
                        <div className="text-black text-3xl flex flex-col">
                            <div className="bg-[#BAFF66] group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">E-mail</div>
                            <div className="bg-[#BAFF66] group-hover:bg-white transition-all duration-500 rounded-lg w-fit p-1">marketing</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-black justify-center rounded-full border-black border size-9 p-1 rotate-[20deg] group-hover:rotate-[380deg] transition-all duration-500">
                                <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                            <div className="text-black font-normal text-xl">Learn more</div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center z-[2]">
                        <img src="https://linkyviz-redesign.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh687c0pq%2Fimage%2Fupload%2Fv1696061366%2Ftokyo-the-twelfth-day-of-the-calendar-is-marked-with-a-smiley_1_1_hth5rn.png&w=640&q=75" alt="tes" className="w-[85%] object-cover grayscale" />
                    </div>
                    <div className="absolute z-[1] w-full h-full bg-[#BAFF66] top-0 left-[-100%] group-hover:left-[0] transition-all duration-500"></div>
                </div>
            </div>
        </section>
    )
}