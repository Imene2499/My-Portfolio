import React from "react"
import nav from "../../assets/nav.svg"
import HomeSection from "../HomeSection/HomeSection"
import AboutSection from "../AboutSection/AboutSection"
import EducationSecion from "../EducationSection/EducationSection"
import ExperienceSection from "../ExperienceSection/ExperienceSection"
import SkillsSection from "../SkillsSection/SkillsSection"
import ProjectsSection from "../ProjectsSection/ProjectsSection"
import ContactSection from "../ContactSection/ContactSection"


function NavBar() {
    return (
        <div className="text-DarkBlue flex justify-between items-center pl-4 md:pl-12 lg:pl-24 py-4 md:py-8">
            <h1 className="font-bold text-[1em] md:text-[1.5em]">IMENE</h1>
            <img className="block md:hidden mr-4" src={nav} alt="Navigation Icon"></img>
            <nav className="hidden sm:hidden md:block">
                <ul className="flex text-[0.8em] md:text-[0.9em] lg:text-[1em]">
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            Home
                        </a>
                    </li>
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            About
                        </a>
                    </li>
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            Experience
                        </a>
                    </li>
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            Skills
                        </a>
                    </li>
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            Projects
                        </a>
                    </li>
                    <li className="mr-4 md:mr-8 lg:mr-16">
                        <a href="https://tailwindcss.com/docs/min-height" className="hover:text-DarkBrown">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
