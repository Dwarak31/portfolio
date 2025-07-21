import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { Link } from "react-scroll";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
export const Footermain = () => {
  return (
    <motion.div
      className="px-4"
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Dwarak G</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((items, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={items.section}
                  className="hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {items.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        {" "}
        © 2024 Dwarak G | All Rights Reserved.
      </p>
    </motion.div>
  );
};
