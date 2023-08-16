import { React, useEffect } from "react"
import DesignManager from "../../assets/graphic_design.jpg"
import mentor from '../../assets/mentor2.jpg'
import hackathon from "../../assets/hackathon.jpg"
import AOS from "aos"
import "aos/dist/aos.css"



function ExperienceSection() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-up" className="pt-24 md:py-32 px-4 md:pl-12 lg:pl-24 text-DarkBlue">
            <h1 className="text-Yellow font-extrabold text-[3.5em] md:text-[4em] lg:text-[4.5em] font-[poppins] pb-12 md:pb-24">EXPERIENCE.</h1>
            <div data-aos='fade-up' className="flex justify-between items-center flex-col lg:flex-row pb-16 md:pb-28 px-4 md:px-16 lg:px-0">
                <img src={DesignManager} className="w-full lg:w-[30em] border-[1.3px] rounded-[5px] border-DarkBrown transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out"></img>
                <div className="p-4 md:p-0 md:pt-8 lg:pl-8 lg:pt-0">
                    <h3 className="font-[poppins] font-bold text-[1.3em] md:text-[1.5em] text-center md:text-left leading-8">DESIGN MANAGER AT CSE (CLUB SCIENTIFIQUE DE ESI)</h3>
                    <br />
                    <p className="font-[Raleway] font-medium text-[1em]  md:text-[1.2em] lg:text-[1.1em] leading-10 text-center md:text-left">I Collaborated with the <span className="font-bold">marketing team</span> of the club to design eye-catching posters, banners, that communicated our club's activities.
                        I also led a team of <span className="font-bold">graphic designers</span>, providing guidance, and feedback to ensure the delivery of high-quality
                        design work.
                    </p>
                </div>
            </div>
            <div data-aos='fade-up' className="flex justify-between items-center flex-col lg:flex-row pb-16 md:pb-28 justify-end px-4 md:px-16 lg:px-0">
                <img src={mentor} className="w-full lg:w-[30em] border-[1.3px] rounded-[5px] border-DarkBrown  transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out"></img>
                <div className="p-4 md:p-0 md:pt-8 lg:pl-8 lg:pt-0">
                    <h3 className="font-[poppins] font-bold text-[1.3em] md:text-[1.5em] text-center md:text-left leading-8">MENTOR AT CSE (CLUB SCIENTIFIQUE DE ESI)</h3>
                    <br />
                    <p className="font-[Raleway] font-medium text-[1em] md:text-[1.2em] lg:text-[1.1em] leading-10 text-center md:text-left">Served as a mentor for an intern project within the CSE club where
                        I provided <span className="font-bold">leadership</span> and guidance to a team of nearly 20 participants over a span of 3 months
                        and developed a <span className="font-bold">digital solution</span> for the assigned challenge with my team.
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" className="flex justify-between items-center flex-col lg:flex-row px-4 md:px-16 lg:px-0">
                <img src={hackathon} className="w-full lg:w-[30em]  border-[1.3px] rounded-[5px] border-DarkBrown transition-transform transform hover:scale-105 transition-all duration-300 ease-in-out"></img>
                <div className="p-4 md:p-0 md:pt-8 lg:pl-8 lg:pt-0">
                    <h3 className="font-[poppins] font-bold text-[1.3em] md:text-[1.5em] text-center md:text-left leading-8">HACKATHONS PARTICIPANT.</h3>
                    <br />
                    <p className="font-[Raleway] font-medium text-[1em] md:text-[1.2em] lg:text-[1.1em] leading-10 text-center md:text-left">Took part in various <span className="font-bold">hackathons</span>, both within and beyond my college, these experiences enriched me with a wealth of skills, encompassing <span className="font-bold">teamwork, stress management</span>, and the rapid crafting of
                        digital solutions under time constraints.
                    </p>
                </div>
            </div>

        </div>
    )
}


export default ExperienceSection