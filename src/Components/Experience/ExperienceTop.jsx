import { ExperienceTopleft } from "./ExperienceTopleft"
import { ExperienceTopMiddle } from "./ExperienceTopMiddle"
import { ExperienceTopRight } from "./ExperienceTopRight"


export const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
        <ExperienceTopleft/>
        <ExperienceTopMiddle/>
        <ExperienceTopRight/>
    </div>
  )
}
