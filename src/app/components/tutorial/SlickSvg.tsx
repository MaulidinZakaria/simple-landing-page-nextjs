"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useEffect, useRef } from "react";

export default function SlickSvg() {
  gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger)

  // const tl = gsap.timeline();
  
  useEffect(() => {
    var path = `M 10 200 Q 500 200 990 200`;
    const finalPath = `M 10 200 Q 500 200 990 200`;
    const string = document.querySelector('svg');

    string?.addEventListener('mousemove', (dets) => {
      path = `M 10 200 Q ${dets.x} ${dets.y} 990 200`;

      gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
      })
    })

    string?.addEventListener('mouseleave', () => {
      gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1,
        ease: 'elastic.out(1,0.3)'
      })
    })
  }, [])



  return (
    // <ScrollTriggerText></ScrollTriggerText>
    <div id="string">
      <svg width="1000" height="400">
        <path d="M 10 200 Q 500 200 990 200" stroke="white" fill="transparent" />
      </svg>
    </div>
  );
}
