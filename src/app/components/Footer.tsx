'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    useGSAP(() => {
        gsap.from('footer', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 90%',
                end: 'bottom 100%',
                scrub: 1,
            },
            opacity: 0,
        })
    })

    return (
        <footer className="mx-36 mt-10 h-[70vh] p-14 bg-black rounded-t-[45px] shadow-2xl flex flex-col justify-between font-space_grotesk">
            <div className="flex w-full justify-between items-center">
                <div className="flex justify-between items-center gap-2 hover:scale-105 duration-300 transition-all">
                    <svg className="size-11 text-[#BAFF66]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.3884C11.0942 9.62673 8.62833 6.34423 6.335 4.7259C4.13833 3.17506 3.30083 3.4434 2.75167 3.69256C2.11583 3.9784 2 4.95506 2 5.52839C2 6.10339 2.315 10.2367 2.52 10.9276C3.19917 13.2076 5.61417 13.9776 7.83917 13.7309C4.57917 14.2142 1.68333 15.4017 5.48083 19.6292C9.65833 23.9542 11.2058 18.7017 12 16.0392C12.7942 18.7017 13.7083 23.7651 18.4442 19.6292C22 16.0392 19.4208 14.2142 16.1608 13.7309C18.3858 13.9784 20.8008 13.2076 21.48 10.9276C21.685 10.2376 22 6.10256 22 5.52923C22 4.95423 21.8842 3.97839 21.2483 3.6909C20.6992 3.44256 19.8617 3.17423 17.665 4.72423C15.3717 6.34506 12.9058 9.62756 12 11.3884Z"></path></svg>
                    <div className="text-white font-extrabold text-3xl">BlueZ</div>
                </div>
                <div className="flex justify-between items-center gap-9 text-white">
                    <a href="#team" className="text-base font-normal border-b-2 border-transparent py-3 hover:border-white hover:font-semibold transition-all duration-200">About Us</a>
                    <a href="#services" className="text-base font-normal border-b-2 border-transparent py-3 hover:border-white hover:font-semibold transition-all duration-200">Services</a>
                    <a href="#useCase" className="text-base font-normal border-b-2 border-transparent py-3 hover:border-white hover:font-semibold transition-all duration-200">Use Cases</a>
                    <a href="#testimonials" className="text-base font-normal border-b-2 border-transparent py-3 hover:border-white hover:font-semibold transition-all duration-200">Testimonials</a>
                    <a href="#contact" className="text-base font-normal border-b-2 border-transparent py-3 hover:border-white hover:font-semibold transition-all duration-200">Contact Us</a>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <a href="#" target="_blank" className="bg-white p-[6px] size-8 rounded-full text-black hover:scale-110 duration-300 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                    </a>
                    <a href="#" target="_blank" className="bg-white p-[6px] size-8 rounded-full text-black hover:scale-110 duration-300 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path></svg>
                    </a>
                    <a href="#" target="_blank" className="bg-white p-[6px] size-8 rounded-full text-black hover:scale-110 duration-300 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                    </a>
                </div>
            </div>
            <div className="flex justify-between w-full h-fit">
                <div className="flex flex-col h-fit w-[35%] gap-4 items-start">
                    <div className="py-1 px-2 text-black bg-[#BAFF66] rounded-lg font-medium">Contact us:</div>
                    <div className="text-lg font-normal">Email : info@bluez.com</div>
                    <div className="text-lg font-normal">Phone : +62 123456 789</div>
                    <div className="text-lg font-normal">Address : G-77, Gate No. 7, Uknown Place, Uknown Place, Uknown Place - 123456</div>
                </div>
                <div className="w-[50%] h-fit bg-[#292a32] rounded-2xl flex px-10 py-12 justify-between items-center">
                    <input type="text" className="bg-[#292a32] border border-white py-4 px-3 w-[60%] rounded-2xl text-base font-normal placeholder:text-white" placeholder="Email" />
                    <button className="py-4 w-[35%] bg-[#BAFF66] rounded-2xl flex justify-center items-center relative group overflow-hidden cursor-default">
                        <p className="text-black text-lg font-medium z-[2]">Subscribe</p>
                        <div className="absolute z-[1] bg-white h-full w-full left-[-100%] group-hover:left-0 transition-all duration-500"></div>
                    </button>
                </div>
            </div>
            <div className="h-[1px] w-full bg-white"></div>
            <div className="flex w-full justify-between items-center text-lg">
                <div>© 2024 BlueZ. All Rights Reserved.</div>
                <div>Privacy Policy</div>
            </div>
        </footer>
    )
}
export default Footer