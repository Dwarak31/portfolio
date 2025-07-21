import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
export const AboutMeimg = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-[500px] w-[300px] relative"
    >
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          className="h-full w-auto object-cover"
          src="https://ik.imagekit.io/dwarak/Portfolio/about-me.jpg"
          alt="img"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
};
