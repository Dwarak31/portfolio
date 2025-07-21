import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-scroll";
export const Navbarbtn = () => {
  return (
    <div className="sm:hidden md:block">
      <button className="px-4 py-2 text-xl font-bold  border-cyan text-white rounded-full flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-100 transision-all duration-300 hover:shadow-cyanShadow">
        <Link to="contact" className="flex justify-end items-center">Hire Me <FiArrowDownRight /></Link>
      </button>
    </div>
  );
};
