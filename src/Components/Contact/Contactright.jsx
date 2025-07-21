import { Contactinfo } from "./Contactinfo";
import { Contactsocial } from "./Contactsocial";

export const Contactright = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="https://ik.imagekit.io/dwarak/Portfolio/email-image.png"
        alt="img"
      />
      <Contactinfo/>
      <Contactsocial/>
    </div>
  );
};
