import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
export const SubHerosection = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4"
    >
      <p className="md:block sm:hidden">Fast Learner</p>
      <p className="md:block sm:hidden">Leadership</p>
      <p className="md:block sm:hidden">Critical Thinker</p>
    </motion.div>
  );
};
