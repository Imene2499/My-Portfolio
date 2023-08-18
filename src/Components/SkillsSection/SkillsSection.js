import { React, useEffect } from "react"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import js from "../../assets/js.svg"
import react from "../../assets/react.svg"
import ai from "../../assets/ai.svg"
import indesign from "../../assets/indesign.svg"
import figma from "../../assets/figma.svg"
import tailwind from "../../assets/tailwind.svg"
import AOS from "aos"
import "aos/dist/aos.css"


function SkillsSection() {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, [])
    return (
        <div className="pt-24 md:py-24 ">
            <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em] font-[poppins] pb-8 md:pb-24 px-4 md:px-12 lg:px-24">SKILLS.</h1>
            <div className="flex flex-col px-4 md:px-12 lg:px-24">
                <div data-aos='fade-up' className="flex gap-8 md:gap-28 lg:gap-40 justify-center pb-24">
                    <i class="fa-brands fa-html5 text-DarkBrown text-[4em] md:text-[7em] lg:text-[8em]"></i>
                    <i class="fa-brands fa-css3-alt text-DarkBrown text-[4em] md:text-[7em] lg:text-[8em]"></i>
                    <i class="fa-brands fa-js text-DarkBrown text-[4em] md:text-[7em] lg:text-[8em]"></i>
                    <i class="fa-brands fa-react text-DarkBrown text-[4em] md:text-[7em] lg:text-[8em]"></i>
                </div>
                <div data-aos="fade-up" className="flex gap-8 md:gap-28 lg:gap-40 justify-center pb-8 md:pb-16">
                    <img className="w-[3.5em] md:w-[6em] lg:w-[7em]" src={ai}></img>
                    <img className="w-[3.5em] md:w-[6em] lg:w-[7em]" src={indesign}></img>
                    <i class="fa-brands fa-figma text-DarkBrown text-[4em] md:text-[7em] lg:text-[8em]"></i>
                    <img className="w-[4em] md:w-[7em] lg:w-[7em]" src={tailwind}></img>
                </div>
            </div>
            <p data-aos='fade-up' className="font-[poppins] text-DarkBrown font-semibold text-center md:text-left px-8 md:px-12 lg:px-24 text-[1.5em] md:text-[2em]">And more...</p>
        </div>
    )
}

export default SkillsSection