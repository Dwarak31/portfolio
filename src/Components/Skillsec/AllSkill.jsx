import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import  SingleSkill  from "./SingleSkill";

export const AllSkill = () => {
  const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    { skill: "Java", icon: FaJava },
    {
      skill: "SpringBoot",
      icon: SiSpringboot,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
      skill: "MySQL",
      icon: SiMysql,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((items, index) => {
          return (
            <SingleSkill
              key={index}
              text={items.skill}
              imgSvg={<items.icon />}
            />
          );
        })}
      </div>
    </div>
  );
};
