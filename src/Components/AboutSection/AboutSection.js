import React from "react"
import Imene from '../../assets/Imene2.svg'


function AboutSection() {
    return (
        <div className="pt-24 md:pt-8 lg:pt-32 px-4 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-end md:items-center justify-center md:justify-between">
            <section>
                <img src={Imene} className="w-[15rem] md:w-[40rem] lg:w-[40rem] transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out"></img>
            </section>
            <section className="pl-4 md:pl-16">
                <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em]">ABOUT.</h1>
                <p className="text-DarkBlue font-[Raleway] font-medium leading-10 md:text-[1.1em]">A  3rd year computer science student at the higher national school
                    of <span className="font-bold">computer Sciene</span> (ESI EX INI) based in Oued Smar, Algiers, Algeria,
                    a <span className="font-bold">web developer</span> and a <span className="font-bold">Designer</span>, Arabic is my native language and I
                    speak both French and English fluently.</p>

            </section>

        </div>
    )

}

export default AboutSection

