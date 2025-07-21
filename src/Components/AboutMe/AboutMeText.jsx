import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { Link } from "react-scroll";
export const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center"
    >
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white font-body">
        Hello! I'm Dwarak G , an enthusiastic and driven aspiring Software Web
        Developer based in Chennai. My passion lies in leveraging foundational
        programming skills to craft innovative and user-friendly web
        experiences. I'm proficient in languages like Java, JavaScript, HTML/CSS
        , and skilled in using databases such as MySQL. I have hands-on
        experience with modern frameworks including SpringBoot, React, and
        TailwindCSS , and I'm adept with tools like Git/GitHub, VSCode, Postman,
        and Vite. My projects demonstrate my abilities, from building a
        comprehensive Trading Platform with a Spring Boot backend and React
        frontend, integrating APIs like Gemini and CoinGecko, and payment
        gateways like Razorpay and Stripe , to designing my own responsive and
        visually appealing Portfolio Website with smooth animations using Framer
        Motion. Currently pursuing my B.E. in Electronics and Communication at
        Sri SaiRam Engineering College , I'm eager to continuously learn and
        grow as a developer. I thrive on collaborating effectively within a team
        to deliver high-quality products, while always expanding my knowledge in
        areas like SpringBoot and React.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          {" "}
          My Projects
        </Link>
      </button>
    </motion.div>
  );
};
