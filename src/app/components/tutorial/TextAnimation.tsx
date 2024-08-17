"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger)
  // const tl = gsap.timeline();


  const splitContent = () => {
    let text = document.getElementById('text');
    if (text) {
      const splitText = text.textContent?.split('');
      let content = '';

      const length = (splitText?.length ?? 0) / 2;

      console.log(length);
      

      splitText?.forEach((char, idx) => {
        if(idx < length) {
          content += `<span class="before" style="display: inline-block">${char}</span>`;
        } else {
          content += `<span class="after" style="display: inline-block">${char}</span>`;
        }
      });

      text.innerHTML = content;
    }
  };

  useEffect(() => {
    splitContent(); 

    gsap.from('#text .before', {
      y: 70,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.5
    });

    gsap.from('#text .after', {
      y: 70,
      opacity: 0,
      duration: 0.6,
      stagger: -0.15,
      delay: 0.5
    });

  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-black">
      <div id="text" className="inline-block text-white font-bold text-7xl py-4">ANIMATION</div>
    </div>
  );
}
