"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from "react";

export default function ScrollTriggerText() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline();

  useGSAP(
    () => {
      gsap.to('.page2 h1', {
        transform: 'translateX(-110%)',
        scrollTrigger: {
          trigger: '.page2',
          start: 'top 0%',
          end: 'top -150%',
          markers: true,
          scrub: 2,
          pin: true,
        }
      })
    }
  )

  return (
    <div className="overflow-hidden">
      <div className="page1 h-[100vh] w-full bg-black flex justify-center items-center">
      </div>
      <div className="page2 h-[100vh] w-[100%] bg-white px-16">
        <h1 className="text-[500px] text-black font-bold">ANIMATION</h1>
      </div>
      <div className="h-[100vh] w-full bg-black flex justify-center items-center">
      </div>
    </div>
  );
}
