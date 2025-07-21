import { Navbarlogo } from "./Navbarlogo";
import { Navbarlink } from "./Navbarlink";
import { Navbarbtn } from "./Navbarbtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Navbarmain = () => {
  const [menu, setmenu] = useState(false);
  const toggleMenu = () => {
    setmenu(menu);
  };
  return (
    <nav className="max-w-[99%] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[90%] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <Navbarlogo />
        <div className={`${menu ? "sm:block" : "sm:hidden"} lg:block`}>
          <Navbarlink />
        </div>

        <Navbarbtn />
      </div>
      <button
        className="flex lg:hidden sm:block p-6 bg-black  justify-center items-center  rounded-full text-white "
        onClick={toggleMenu}
      >
        <RxHamburgerMenu />
      </button>
    </nav>
  );
};
