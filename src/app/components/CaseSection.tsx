'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const CaseSection = () => {

    useGSAP(() => {
        gsap.from('.title-sec-3', {
            scrollTrigger: {
                trigger: '.title-3',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: -100,
            opacity: 0,
        })

        gsap.from('.subtitle-sec-3', {
            scrollTrigger: {
                trigger: '.title-3',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: 100,
            opacity: 0,
        })

        gsap.from('.box-case', {
            scrollTrigger: {
                trigger: '.box-case',
                start: 'top 90%',
                end: 'bottom 70%',
                scrub: 1,
            },
            y: 100,
            opacity: 0,
        })
    });

    return (
        <section className="h-[85vh] w-full flex flex-col font-space_grotesk px-36 gap-3 overflow-hidden section-3 pt-4 pb-12" id="useCase">
            <div className="flex items-center justify-start py-16 gap-10 title-3">
                <div className="bg-[#BAFF66] text-black text-5xl rounded-md p-2 title-sec-3">Case studies</div>
                <div className="text-black w-[50%] text-xl subtitle-sec-3">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </div>
            </div>
            <div className="w-full bg-black rounded-[45px] shadow-xl flex px-20 py-14 justify-between box-case">
                <div className="h-full w-[27%] flex flex-col items-start justify-between">
                    <div className="text-xl">For an electronics store, we executed a precisely targeted social media campaign, resulting in a remarkable 30% surge in online sales.</div>
                    <button className="text-[#BAFF66] flex justify-start items-center hover:scale-105 transition-all duration-200 group cursor-default">
                        <p className="text-lg">Learn more</p>
                        <svg className="size-10 group-hover:rotate-[360deg] transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </button>
                </div>
                <div className="w-[2.5px] h-full bg-white"></div>
                <div className="h-full w-[27%] flex flex-col items-start justify-between">
                    <div className="text-xl">For a backpacking hostel, our combined performance marketing strategies and engaging social media efforts boosted foot traffic by 55%.</div>
                    <button className="text-[#BAFF66] flex justify-start items-center hover:scale-105 transition-all duration-200 group cursor-default">
                        <p className="text-lg">Learn more</p>
                        <svg className="size-10 group-hover:rotate-[360deg] transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </button>
                </div>
                <div className="w-[2.5px] h-full bg-white"></div>
                <div className="h-full w-[27%] flex flex-col items-start justify-between">
                    <div className="text-xl">Crafted a complete branding package from scratch for a gaming cafe, covering everything from logo design to sunboards, and captivating social media graphics.</div>
                    <button className="text-[#BAFF66] flex justify-start items-center hover:scale-105 transition-all duration-200 group cursor-default">
                        <p className="text-lg">Learn more</p>
                        <svg className="size-10 group-hover:rotate-[360deg] transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default CaseSection