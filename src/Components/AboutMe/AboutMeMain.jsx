import { AboutMeText } from "./AboutMeText";
import { AboutMeimg } from "./AboutMeimg";

export const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center" id="about">
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeimg />
      </div>
    </div>
  );
};
