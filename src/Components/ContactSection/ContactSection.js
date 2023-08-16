import React from "react"


function ContactSection() {
    return (
        <div className="py-12 md:py-24 px-4 md:px-12 lg:px-24">
            <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em] font-[poppins]">CONTACT.</h1>
            <p className="text-DarkBlue font-[Raleway] font-bold pt-4 md:pt-16 leading-10 pb-8 md:text-[1.2em] text-center">Don't hesitate to reach out to me if you like my work!
            </p>
            <div className="flex justify-center gap-8 md:gap-16">
                <a href="mailto:li_louni@esi.dz" target="_blank"><i class="fa-solid fa-envelope text-[2.5em] md:text-[6em] text-DarkBlue"></i></a>
                <a href="https://www.linkedin.com/in/imene-louni-019850230/" target="_blank"><i class="fa-brands fa-linkedin text-[2.5em] md:text-[6em] text-DarkBlue"></i></a>
                <a href="https://www.instagram.com/imeene_louni/" target="_blank"><i class="fa-brands fa-instagram text-[2.5em] md:text-[6em] text-DarkBlue"></i></a>
                <a href="https://github.com/Imene2499" target="_blank"><i class="fa-brands fa-github text-[2.5em] md:text-[6em] text-DarkBlue"></i></a>
            </div>
        </div>
    )
}

export default ContactSection