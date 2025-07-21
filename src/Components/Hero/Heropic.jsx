import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { FaRegCircle } from "react-icons/fa";

const Heropic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="https://ik.imagekit.io/dwarak/Portfolio/WhatsApp%20Image%202025-02-08%20at%2010.32.44%20PM.jpeg"
        alt="Dk"
        className="max-h-[250px] w-auto rounded-full " 
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        < FaRegCircle className=" md:h-[90%] sm:h-[120%] min-h-[300px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};
export default Heropic;


