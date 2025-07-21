import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { AllSkill } from "./AllSkill";
import { AllSkillSm } from "./AllSkillSm";
import { SkillText } from "./SkillText";

export const SkillMain = () => {
  return (
    <motion.div
      id="skills"
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillText />

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkill />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSm />
        </div>
      </div>
    </motion.div>
  );
};
