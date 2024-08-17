/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function HomeSection() {

    useGSAP(
        () => {
            const tl = gsap.timeline();
            // section 1
            tl.from(".logo, .menu a, .button-nav", {
                y: -40,
                opacity: 0,
                duration: 0.7,
                delay: 0.5,
                stagger: 0.17,
            })

            tl.from(".title", {
                x: -150,
                opacity: 0,
                duration: 0.5,
            }, "-=0.3")

            tl.from(".subtitle", {
                x: -100,
                opacity: 0,
                duration: 0.4,
            })

            tl.from(".button-title", {
                opacity: 0,
                duration: 0.4,
            })

            tl.from(".image", {
                opacity: 0,
                x: 100,
                duration: 0.5,
            }, "-=0.5")

            tl.from(".logos img", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
            }, "-=0.6")


        }
    );

    return (
        <section className="min-h-[100vh] w-[100%] flex flex-col px-36">
            <nav className="flex justify-between items-center py-7">
                <div className="flex justify-between items-center gap-3 logo">
                    <svg className="size-12 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z"></path></svg>
                    <div className="text-black font-extrabold text-4xl">BlueZ</div>
                </div>
                <div className="flex justify-end items-center gap-9">
                    <div className="flex justify-center items-center gap-4 menu">
                        <a href="#team" className="text-lg text-black font-semibold border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">About Us</a>
                        <a href="#services" className="text-lg text-black font-semibold border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">Services</a>
                        <a href="#useCase" className="text-lg text-black font-semibold border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">Use Cases</a>
                        <a href="#testimonials" className="text-lg text-black font-semibold border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">Testimonials</a>
                        <a href="#contact" className="text-lg text-black font-semibold border-2 border-transparent hover:border-black px-4 py-2 rounded-lg">Contact Us</a>
                    </div>
                    <button className="relative text-lg font-semibold border-black border-2 px-6 py-3 rounded-xl group overflow-hidden cursor-default button-nav">
                        <p className="relative text-black z-[2]">Request a quote</p>
                        <div className="w-full h-full bg-[#BAFF66] absolute top-0 left-[-100%] group-hover:left-[0] z-[1] transition-all duration-300"></div>
                    </button>
                </div>
            </nav>
            <div className="w-full flex">
                <div className="w-[50%] flex flex-col items-start justify-start gap-9 pt-8 pb-8 font-space_grotesk">
                    <div className="text-black font-medium text-7xl title">Navigating the digital landscape for success</div>
                    <div className="text-black text-xl font-normal tracking-wide subtitle">Our digital marketing agency helps businesses grow and succeed online throught a range of services including SEO, PPC, social media marketing, and content creation.</div>
                    <button className="relative bg-black px-8 py-4 text-xl font-medium rounded-xl shadow-lg flex justify-center items-center overflow-hidden group border-2 border-transparent button-title cursor-default">
                        <p className="text-white relative z-[2] group-hover:text-black transition-all duration-300">Book a consultation</p>
                        <div className="absolute bg-[#BAFF66] z-[1] size-[300px] scale-0 group-hover:scale-100 transition-all duration-500 rounded-full"></div>
                    </button>
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <img src="https://linkyviz-redesign.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh687c0pq%2Fimage%2Fupload%2Fv1694603415%2FIllustration_zz3x0c.png&w=640&q=75" alt="tes" className="object-cover w-[80%] image" />
                </div>
            </div>
            <div className="w-full h-full overflow-hidden pt-9">
                <div className="gap-10 flex justify-start items-center animate-[slide_20s_linear_infinite] logos">
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_-640x400.png" alt="tes" className="h-20 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXRXSmTUbT62CJr4lfzEIzEZ5cqr35pf-Ug&s" alt="tes" className="h-14 grayscale hover:grayscale-0" />
                    <img src="https://logowik.com/content/uploads/images/dribbble.jpg" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Google_Fonts_logo.svg/1280px-Google_Fonts_logo.svg.png" alt="tes" className="h-8 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-IfTA58NONTORVfigb72pKqp8hHiEm7SA&s" alt="tes" className="h-10 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYZl4Yf0aGwj8FPEOmjhG1ODkzi6gjbB9lw&s" alt="tes" className="h-16 grayscale hover:grayscale-0" />
                    <img src="https://media.licdn.com/dms/image/D4D12AQHLiHtRbPUoAA/article-cover_image-shrink_600_2000/0/1696134741709?e=2147483647&v=beta&t=CajO9eTDp6iKznPn753F6ZUyTgaPf6DOzihN1AMMJew" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_-640x400.png" alt="tes" className="h-20 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXRXSmTUbT62CJr4lfzEIzEZ5cqr35pf-Ug&s" alt="tes" className="h-14 grayscale hover:grayscale-0" />
                    <img src="https://logowik.com/content/uploads/images/dribbble.jpg" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Google_Fonts_logo.svg/1280px-Google_Fonts_logo.svg.png" alt="tes" className="h-8 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-IfTA58NONTORVfigb72pKqp8hHiEm7SA&s" alt="tes" className="h-10 grayscale hover:grayscale-0" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYZl4Yf0aGwj8FPEOmjhG1ODkzi6gjbB9lw&s" alt="tes" className="h-16 grayscale hover:grayscale-0" />
                    <img src="https://media.licdn.com/dms/image/D4D12AQHLiHtRbPUoAA/article-cover_image-shrink_600_2000/0/1696134741709?e=2147483647&v=beta&t=CajO9eTDp6iKznPn753F6ZUyTgaPf6DOzihN1AMMJew" alt="tes" className="h-24 grayscale hover:grayscale-0" />
                </div>
            </div>
        </section>
    )
}
