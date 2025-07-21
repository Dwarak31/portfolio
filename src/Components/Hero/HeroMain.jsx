
import Heropic from "./Heropic"
import { HeroText } from "./HeroText"

export const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 flex justify-between px-10 ">
        <HeroText/>
        <Heropic/>
    </div>
  )
}
