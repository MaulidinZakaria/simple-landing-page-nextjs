/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from "react";
import ScrollTriggerText from "./components/tutorial/ScrollTriggerText";
import SlickSvg from "./components/tutorial/SlickSvg";
import Image from "next/image";
import HomeSection from "./components/HomeSection";
import { ServiceSection } from "./components/ServiceSection";
import CaseSection from "./components/CaseSection";
import TeamSection from "./components/TeamSection";
import TestimoniSection from "./components/TestimoniSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useGSAP(() => {
    gsap.from('.box', {
      scrollTrigger: {
        trigger: '.box',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
      },
      y: 100,
      opacity: 0,
    })
  })

  return (
    <div className="bg-white font-mono">
      <HomeSection></HomeSection>
      <ServiceSection></ServiceSection>
      <div className="h-[45vh] mx-36 bg-[#f3f4f6] shadow-xl my-16 rounded-[35px] flex p-12 box">
        <div className="w-[60%] h-full flex flex-col items-start justify-between font-space_grotesk">
          <div className="text-black font-medium text-3xl tracking-wide">Let's make things happen</div>
          <div className="text-black font-normal text-lg w-[80%] pb-4">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
          <button className="relative bg-black px-8 py-4 text-xl font-medium rounded-xl shadow-lg flex justify-center items-center overflow-hidden group border-2 border-transparent cursor-default">
            <p className="text-white relative z-[2] group-hover:text-black transition-all duration-300">Get your free proposal</p>
            <div className="absolute bg-[#BAFF66] z-[1] h-full w-full top-0 left-[-100%] group-hover:left-0 transition-all duration-500"></div>
          </button>
        </div>
        <div className="w-[40%] h-full flex items-center justify-center">
          <img src="https://social-hub-ui.vercel.app/CtaCardSvg.svg" alt="" className="" />
        </div>
      </div>
      <CaseSection></CaseSection>
      <TeamSection></TeamSection>
      <TestimoniSection></TestimoniSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
