"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CursorAnimation() {
  gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const main = document.getElementById('main');
    const cursor = document.getElementById('cursor');
    const image = document.querySelector('.image');
    let timeoutId: NodeJS.Timeout;

    window.addEventListener('mousemove', (dets) => {
      const color = `rgb(${dets.x % 256}, ${dets.y % 256}, ${(dets.x + dets.y) % 512})`;

      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        opacity: 1,
        backgroundColor: color
      })

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.3,
        });
      }, 1000);
    });

    image?.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 3,
      })
    });

    image?.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 1,
      })
    })
  }, [])

  return (
    // <ScrollTriggerText></ScrollTriggerText>
    // <SlickSvg></SlickSvg>
    <>
      <div className="size-5 bg-white rounded-full absolute opacity-0" id="cursor"></div>
      <div className="w-full h-[100vh] flex justify-center items-center" id="main">
        <div className="image h-[60vh] w-[60vw]">
          <Image src="https://images.unsplash.com/photo-1695697628876-f297090fa339?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover" width={1920} // Set the desired width
            height={1080}
            quality={100} />
        </div>
      </div>
    </>
  );
}
