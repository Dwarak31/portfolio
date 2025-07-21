import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { ExperienceText } from "./ExperienceText";
import { ExperienceTop } from "./ExperienceTop";

export const ExperienceMain = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="experience"
      className="max-w-[1200px] mx-auto px-4"
    >
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
    </motion.div>
  );
};
