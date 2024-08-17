/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const TeamSection = () => {

    useGSAP(() => {
        gsap.from('.title-sec-4', {
            scrollTrigger: {
                trigger: '.title-4',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: -100,
            opacity: 0,
        })

        gsap.from('.subtitle-sec-4', {
            scrollTrigger: {
                trigger: '.title-4',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: 100,
            opacity: 0,
        })

        gsap.from('.box-team-1', {
            scrollTrigger: {
                trigger: '.box-team-1',
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: 1,
            },
            y: 100,
            opacity: 0,
        })

        gsap.from('.box-team-2', {
            scrollTrigger: {
                trigger: '.box-team-2',
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: 1,
            },
            y: 100,
            opacity: 0,
        })
    });

    return (
        <section className="w-full flex flex-col font-space_grotesk px-36 gap-6 overflow-hidden section-4 py-16" id="team">
            <div className="flex items-center justify-start pb-16 gap-10 title-4">
                <div className="bg-[#BAFF66] text-black text-5xl rounded-md p-2 title-sec-4">Team</div>
                <div className="text-black w-[50%] text-xl subtitle-sec-4">
                    Meet the Skilled and Experienced Team Behind Our Successful Digital Marketing Strategies
                </div>
            </div>
            <div className="grid h-[92vh] w-full grid-cols-2 grid-rows-2 gap-x-12 gap-y-10">
                <div className="box-team-1">
                    <div className="bg-white flex flex-col justify-center gap-7 px-8 py-10 rounded-[40px] border border-black text-black shadow-[0px_7px_0px_0px_#000] hover:scale-105 duration-300 transition-all">
                        <div className="w-full h-[45%] flex justify-between">
                            <img src="https://res.cloudinary.com/dh687c0pq/image/upload/v1696065121/Picture_3_xtedl3.svg" alt="tes" />
                            <div className="h-full w-[62%] flex flex-col justify-end items-start">
                                <div className="font-bold text-2xl">Maulidin Zakaria</div>
                                <div className="text-lg">Founder & Creative Director</div>
                            </div>
                            <div className="h-full w-[8%] flex">
                                <a title="title" rel="noopener" href="https://www.linkedin.com/in/maulidin-zakaria-b0a865250" target="_blank" className="size-10 rounded-full bg-black p-2 hover:scale-110 transition-all duration-300">
                                    <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-black"></div>
                        <div className="w-full h-[30%] text-justify">
                            Hailing from Jombang, UP — our creative mind brings ideas to life with mesmerizing designs. His vision is to infuse every project with digital magic, creating memorable experiences.
                        </div>
                    </div>
                </div>
                <div className="box-team-1">
                    <div className="bg-white flex flex-col justify-center gap-7 px-8 py-10 rounded-[40px] border border-black text-black shadow-[0px_7px_0px_0px_#000] hover:scale-105 duration-300 transition-all">
                        <div className="w-full h-[45%] flex justify-between">
                            <img src="https://res.cloudinary.com/dh687c0pq/image/upload/v1696065121/Picture_3_xtedl3.svg" alt="tes" />
                            <div className="h-full w-[62%] flex flex-col justify-end items-start">
                                <div className="font-bold text-2xl">Maulidin Zakaria</div>
                                <div className="text-lg">Founder & Creative Director</div>
                            </div>
                            <div className="h-full w-[8%] flex">
                                <a title="title" rel="noopener" href="https://www.linkedin.com/in/maulidin-zakaria-b0a865250" target="_blank" className="size-10 rounded-full bg-black p-2 hover:scale-110 transition-all duration-300">
                                    <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-black"></div>
                        <div className="w-full h-[30%] text-justify">
                            Hailing from Jombang, UP — our creative mind brings ideas to life with mesmerizing designs. His vision is to infuse every project with digital magic, creating memorable experiences.
                        </div>
                    </div>
                </div>
                <div className="box-team-2">
                    <div className="bg-white flex flex-col justify-center gap-7 px-8 py-10 rounded-[40px] border border-black text-black shadow-[0px_7px_0px_0px_#000] hover:scale-105 duration-300 transition-all">
                        <div className="w-full h-[45%] flex justify-between">
                            <img src="https://res.cloudinary.com/dh687c0pq/image/upload/v1696065121/Picture_3_xtedl3.svg" alt="tes" />
                            <div className="h-full w-[62%] flex flex-col justify-end items-start">
                                <div className="font-bold text-2xl">Maulidin Zakaria</div>
                                <div className="text-lg">Founder & Creative Director</div>
                            </div>
                            <div className="h-full w-[8%] flex">
                                <a title="title" rel="noopener" href="https://www.linkedin.com/in/maulidin-zakaria-b0a865250" target="_blank" className="size-10 rounded-full bg-black p-2 hover:scale-110 transition-all duration-300">
                                    <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-black"></div>
                        <div className="w-full h-[30%] text-justify">
                            Hailing from Jombang, UP — our creative mind brings ideas to life with mesmerizing designs. His vision is to infuse every project with digital magic, creating memorable experiences.
                        </div>
                    </div>
                </div>
                <div className="box-team-2">
                    <div className="bg-white flex flex-col justify-center gap-7 px-8 py-10 rounded-[40px] border border-black text-black shadow-[0px_7px_0px_0px_#000] hover:scale-105 duration-300 transition-all">
                        <div className="w-full h-[45%] flex justify-between">
                            <img src="https://res.cloudinary.com/dh687c0pq/image/upload/v1696065121/Picture_3_xtedl3.svg" alt="tes" />
                            <div className="h-full w-[62%] flex flex-col justify-end items-start">
                                <div className="font-bold text-2xl">Maulidin Zakaria</div>
                                <div className="text-lg">Founder & Creative Director</div>
                            </div>
                            <div className="h-full w-[8%] flex">
                                <a title="title" rel="noopener" href="https://www.linkedin.com/in/maulidin-zakaria-b0a865250" target="_blank" className="size-10 rounded-full bg-black p-2 hover:scale-110 transition-all duration-300">
                                    <svg className="text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-black"></div>
                        <div className="w-full h-[30%] text-justify">
                            Hailing from Jombang, UP — our creative mind brings ideas to life with mesmerizing designs. His vision is to infuse every project with digital magic, creating memorable experiences.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TeamSection