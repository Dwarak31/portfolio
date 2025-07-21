import { Singlecontactsocial } from "./Singlecontactsocial"
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Contactsocial = () => {
  return (
    <div className="flex gap-4">
        <Singlecontactsocial link="https://github.com/Dwarak31" Icon={ IoLogoGithub}/>
        <Singlecontactsocial link="http://www.linkedin.com/in/dwarakg2005" Icon={ FaLinkedin}/>
        <Singlecontactsocial link="https://www.instagram.com/_dwarak_10/" Icon={ FaInstagram}/>
    </div>
  )
}
