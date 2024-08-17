"use client";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

export default function TimelineAnimationSidebar() {
  gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to("#fullMenu", {
        right: 0,
        duration: 0.5
      });

      tl.from("#subMenu li", {
        x: 150,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
      })

      tl.from("#close", {
        opacity: 0,
      })

      tl.pause();
    }
  )

  useEffect(() => {
    const menu = document.getElementById('menu');
    const fullMenu = document.getElementById('fullMenu');
    const close = document.getElementById('close');

    menu?.addEventListener('click', () => {
      tl.play();
    })

    close?.addEventListener('click', () => {
      tl.reverse();
    })

  }, [])



  return (
    <>
      <div className="overflow-hidden relative w-[100%] h-[100vh] bg-[url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <nav className="flex justify-between py-8 px-16">
          <div className="text-white font-bold text-2xl">Bluez</div>
          <svg id="menu" className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
        </nav>
        <div id="fullMenu" className="h-full w-[40%] bg-white/60 absolute right-[-40%] top-0 backdrop-blur-[5px]">
          <svg id="close" className="absolute cursor-pointer top-[4%] right-[10%] text-black size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
          <ul id="subMenu" className="h-full w-full flex flex-col justify-center items-start px-12 font-bold text-black text-4xl">
            <li className="py-4 px-8">Home</li>
            <li className="py-4 px-8">About</li>
            <li className="py-4 px-8">Services</li>
            <li className="py-4 px-8">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
