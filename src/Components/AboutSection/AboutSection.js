import { React, useEffect } from "react"
import Imene from '../../assets/Imene2.svg'
import AOS from "aos"
import "aos/dist/aos.css"


function AboutSection() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="fade-up" id="about" className="pt-24 md:pt-8 lg:pt-32 px-4 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-end md:items-center justify-center md:justify-between">
            <section>
                <img src={Imene} className="w-[15rem] md:w-[40rem] lg:w-[40rem] transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out"></img>
            </section>
            <section className="pl-4 md:pl-16">
                <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em]">ABOUT.</h1>
                <p className="text-DarkBlue font-[Raleway] font-medium leading-10 md:text-[1.1em]">A  3rd year computer science student at the higher national school
                    of <span className="font-bold">computer Sciene</span> (ESI EX INI) based in Oued Smar, Algiers, Algeria,
                    a <span className="font-bold">web developer</span> and a <span className="font-bold">Designer</span>, <span className="font-bold">Arabic</span> is my native language and I
                    speak both <span className="font-bold">French</span> and <span className="font-bold">English</span> fluently.</p>

            </section>

        </div>
    )

}

export default AboutSection

