import { ExperienceInfo } from "./ExperienceInfo";

export const ExperienceTopleft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        2026 Onwards
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Interns" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5" text="Websites" />
      </div>
      <p className="text-center text-white">
        Problem-solving web developer specializing in React, Tailwind, Vite, and
        the JAVA Full Stack. I transform challenges into elegant solutions, whether
        it's an admin dashboard, a personal portfolio, or a complex website
        clone.
      </p>
    </div>
  );
};
