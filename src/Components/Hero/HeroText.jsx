import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center pt-10">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[45px] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Dwarak G
      </motion.h1>
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white "
      >
        Passionate Web Developer
      </motion.p>
    </div>
  );
};
