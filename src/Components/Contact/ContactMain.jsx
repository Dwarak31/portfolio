import { Contactleft } from "./Contactleft";
import { Contactright } from "./Contactright";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";

export const ContactMain = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <Contactleft />
        <Contactright />
      </div>
    </motion.div>
  );
};
