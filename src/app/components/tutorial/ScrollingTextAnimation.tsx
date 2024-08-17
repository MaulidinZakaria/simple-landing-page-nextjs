"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollingTextAnimation() {
  gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger)
  // const tl = gsap.timeline();

  useEffect(() => {
    window.addEventListener('wheel', (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: 'translateX(-200%)',
          duration: 5,
          repeat: -1,
          ease: 'none',
        })

        gsap.to(".marque img", {
          rotate: 180
        })
      } else {
        gsap.to(".marque", {
          transform: 'translateX(0%)',
          duration: 5,
          repeat: -1,
          ease: 'none',
        })

        gsap.to(".marque img", {
          rotate: 0
        })
      }
    });
  }, []);


  return (
    // <ScrollTriggerText></ScrollTriggerText>
    // <SlickSvg></SlickSvg>
    // <CursorAnimation></CursorAnimation>
    //  <TimelineAnimationSidebar></TimelineAnimationSidebar>
    // <TextAnimation></TextAnimation>

    <>
      <div className="h-[100vh] w-full"></div>
      <div className="h-[100vh] w-full">
        <div className="bg-[rgb(217,255,6)] py-10 px-8 flex items-center justify-start gap-12 overflow-hidden">
          <div className="flex gap-12 justify-center items-center flex-shrink-0 marque translate-x-[-100%]">
            <h1 className="text-black text-6xl font-bold">THRIVE BEYOND LIMITS</h1>
            <Image src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" className="size-20" width={500} height={500} priority />
          </div>
          <div className="flex gap-12 justify-center items-center flex-shrink-0 marque translate-x-[-100%]">
            <h1 className="text-black text-6xl font-bold">THRIVE BEYOND LIMITS</h1>
            <Image src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" className="size-20" width={500} height={500} priority />
          </div>
          <div className="flex gap-12 justify-center items-center flex-shrink-0 marque translate-x-[-100%]">
            <h1 className="text-black text-6xl font-bold">THRIVE BEYOND LIMITS</h1>
            <Image src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" className="size-20" width={500} height={500} priority />
          </div>
          <div className="flex gap-12 justify-center items-center flex-shrink-0 marque translate-x-[-100%]">
            <h1 className="text-black text-6xl font-bold">THRIVE BEYOND LIMITS</h1>
            <Image src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" className="size-20" width={500} height={500} priority />
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full"></div>
    </>
  );
}
