import { HeroMain } from "./Components/Hero/HeroMain"
import { Navbarmain } from "./Components/Navbar/Navbarmain"
import { HeroGradient } from "./Components/Hero/HeroGradient"
import { SubHerosection } from "./Components/Hero/SubHerosection"
import { AboutMeMain } from "./Components/AboutMe/AboutMeMain"
import { Helpersec } from "./Components/Helpersec/Helpersec"
import { SkillMain } from "./Components/Skillsec/SkillMain"
import { ExperienceMain } from "./Components/Experience/ExperienceMain"
import { ProjectMain } from "./Components/Projects/ProjectMain"
import { SubSkills } from "./Components/Skillsec/SubSkills"
import { ContactMain } from "./Components/Contact/ContactMain"
import { Footermain } from "./Components/Footer/Footermain"

 const App = () => {
  return (
   <main className="font-body ">
    <Navbarmain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHerosection/>
    <AboutMeMain/>
    <SkillMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMain/>
    <Footermain/>
    <Helpersec/>
   </main>
  )
}
export default App
