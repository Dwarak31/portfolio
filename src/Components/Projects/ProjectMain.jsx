import { ProjectText } from "./ProjectText";
import { SingleProject } from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";

export const ProjectMain = () => {
  const projects = [
    {
      name: "PortFolio",
      year: "Dec2024",
      align: "right",
      image: "https://ik.imagekit.io/dwarak/Portfolio/Portfolio-Desk.jpg",
      link: "#",
    },
    {
      name: "Respirasence",
      year: "Sept2024",
      align: "left",
      image:
        "https://ik.imagekit.io/dwarak/Portfolio/WhatsApp%20Image%202025-02-09%20at%205.32.25%20PM.jpeg",
      link: "#",
    },
    {
      name: "Crypto Trading Application",
      year: "Mar2025",
      align: "right",
      image: "https://ik.imagekit.io/dwarak/Portfolio/website-img-4.jpg",
      link: "#",
    },
  ];
  return (
    <motion.div         variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }} id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </motion.div>
  );
};
