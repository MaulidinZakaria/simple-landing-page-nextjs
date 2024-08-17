/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {

    useGSAP(() => {
        gsap.from('.title-sec-6', {
            scrollTrigger: {
                trigger: '.title-6',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: -100,
            opacity: 0,
        })

        gsap.from('.subtitle-sec-6', {
            scrollTrigger: {
                trigger: '.title-6',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: 100,
            opacity: 0,
        })

        gsap.from('.box-contact', {
            scrollTrigger: {
                trigger: '.box-contact',
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: 1,
            },
            y: 150,
            opacity: 0,
        })

    });

    return (
        <section className="w-full flex flex-col font-space_grotesk px-36 gap-3 overflow-hidden section-6 mt-8 pb-20" id="contact">
            <div className="flex items-center justify-start pb-10 pt-10 gap-10 title-6">
                <div className="bg-[#BAFF66] text-black text-5xl rounded-md p-2 title-sec-6">Contact us</div>
                <div className="text-black w-[30%] text-xl subtitle-sec-6">
                    Connect with Us: Let's Discuss Your
                    Digital Marketing Needs
                </div>
            </div>
            <div className="w-full h-[75vh] bg-[#f3f4f6] rounded-[45px] shadow-2xl flex px-16 py-12 justify-start gap-16 relative items-center box-contact">
                <div className="flex flex-col h-full w-[50%] justify-between">
                    <div className="flex flex-col w-full h-fit gap-2">
                        <label htmlFor="name" className="text-black text-lg">Name</label>
                        <input type="text" className="w-full text-black text-base font-light px-4 py-2 rounded-2xl bg-white border border-gray-400" placeholder="What should we call you?" id="name" />
                    </div>
                    <div className="flex flex-col w-full h-fit gap-2">
                        <label htmlFor="email" className="text-black text-lg">Email Address*</label>
                        <input type="email" className="w-full text-black text-base font-light px-4 py-2 rounded-2xl bg-white border border-gray-400" id="email" placeholder="YourAwesomeEmail@example.com" />
                    </div>
                    <div className="flex flex-col w-full h-fit gap-2">
                        <label htmlFor="message" className="text-black text-lg">Message</label>
                        <textarea className="w-full text-black text-base font-light px-4 py-2 rounded-2xl bg-white border border-gray-400" id="message" placeholder="Type your message here..." rows={4}></textarea>
                    </div>
                    <button className="w-full relative py-4 bg-black flex justify-center items-center rounded-2xl group overflow-hidden cursor-default border-black border">
                        <p className="text-white text-lg group-hover:text-black transition-all duration-300 z-[2]">Book a consultation</p>
                        <div className="group-hover:left-0 bg-[#BAFF66] transition-all duration-500 h-full w-full absolute top-0 left-[-100%] z-[1]"></div>
                    </button>
                </div>
                <img src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/64cba6a986ab7ac79ce5d05f_Illustration%20contact.png" alt="" className="h-[90%] absolute right-0" />
            </div>
        </section>
    )
}
export default ContactSection