import { Element } from 'react-scroll'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomeSection from './Components/HomeSection/HomeSection'
import AboutSection from './Components/AboutSection/AboutSection'
import EducationSecion from './Components/EducationSection/EducationSection'
import ExperienceSection from './Components/ExperienceSection/ExperienceSection'
import SkillsSection from './Components/SkillsSection/SkillsSection'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection'
import ContactSection from './Components/ContactSection/ContactSection'


function App() {
  return (
    <div className='bg-LightYellow min-h-[100%]'>
      <NavBar />
      <Element name="home">
        <HomeSection />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
      <EducationSecion />
      <Element name="experience">
        <ExperienceSection />
      </Element>
      <Element name="skills">
        <SkillsSection />
      </Element>
      <Element name="projects">
        <ProjectsSection />
      </Element>
      <Element name="contact">
        <ContactSection />
      </Element>
    </div>
  );
}

export default App;
