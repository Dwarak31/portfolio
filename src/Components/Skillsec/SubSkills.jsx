import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
export const SubSkills = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="border-y-2 border-lightGrey relative "
    >
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img
        src="https://ik.imagekit.io/dwarak/Portfolio/subSkills.jpg"
        alt="image"
      />
    </motion.div>
  );
};
