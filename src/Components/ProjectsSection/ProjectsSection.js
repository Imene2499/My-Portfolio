import React from "react"


function ProjectsSection() {
    return (
        <div className="py-12 md:py-24 px-4 md:px-12 lg:px-24">
            <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em] font-[poppins]">PROJECTS.</h1>
            <p className="text-DarkBlue font-[Raleway] font-medium leading-10 pb-12 md:text-[1.2em]">I mainly use <span className="font-bold">Github</span> to share and collaborate projects, you can check them out in my Github account below, also you can find
                my a part of my design projects in <span className="font-bold">CSE's (Club Scientifique de ESI) instagram page</span> as I am a part of the design team of the club.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-between gap-4">
                <a href="https://github.com/Imene2499"
                    target="_blank"
                    className='w-full flex items-center justify-center bg-Yellow text-DarkBrown font-regular py-3 rounded-[5px] border-[1.3px] border-DarkBrown'>
                    <i class="fa-brands fa-github text-[3em]"></i>
                </a>
                <a href="https://www.instagram.com/cse.club/"
                    target="_blank"
                    className='w-full flex items-center justify-center bg-Yellow text-DarkBrown font-regular py-3 rounded-[5px] border-[1.3px] border-DarkBrown'>
                    <i class="fa-brands fa-instagram text-[3em]"></i>
                </a>
            </div>
        </div>
    )
}


export default ProjectsSection