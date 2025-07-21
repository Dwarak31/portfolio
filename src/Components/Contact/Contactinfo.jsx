import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Singleinfo } from "./Singleinfo";
export const Contactinfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
     <Singleinfo text="dwarakg2005@gmail.com" Image={MdOutlineEmail}/>
      <Singleinfo text="8825701029" Image={FaPhoneAlt} />
      <Singleinfo text="Chennai,India" Image={CiLocationOn} />
    </div>
  )
}
