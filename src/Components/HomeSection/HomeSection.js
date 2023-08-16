import React from 'react'
import Imene from '../../assets/Imene3.svg'
import resume from "../../assets/CV.pdf"


function HomeSection() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start lg:items-center md:pr-8 lg:pr-16'>
            <section className="hometext text-DarkBlue py-0 md:py-24 md:px-12 lg:py-28 lg:px-24 flex flex-col items-center md:items-start">
                <p className='text-[1.3em] lg:text-[1.5em]'>Hello, I'm Imene,</p>
                <br />
                <h1 className='md:text-left text-center font-extrabold text-[2.5em] md:text-[2.9em] lg:text-[3.5em] xl:text-[4em]'>
                    Designer & Web Developer
                </h1>
                <br />
                <p className='text-[1.3em] lg:text-[1.5em]'>Based in Algeria.</p>
                <div className='mt-12 relative transition-opacity duration-300 hover:opacity-70'>
                    <a href={resume} download='CV_Louni_Imene' id="btn-download"
                        className='bg-Yellow text-DarkBrown font-regular px-8 py-3 rounded-[5px] border-[1.3px] border-DarkBrown'>
                        Resume
                    </a>
                </div>
            </section>

            <section className="image py-8 md:py-24 lg:py-8 relative transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out">
                <img src={Imene} alt="Imene's Avatar" className='m-auto w-[20em] md:w-[50em] lg:w-[48em]'></img>
            </section>
        </div>
    );
}

export default HomeSection;
