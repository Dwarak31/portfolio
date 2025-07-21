import { Contactform } from "./Contactform";

export const Contactleft = () => {
  return (
    <div className="flex flex-col gap-8 w-full" >
      <div>
        <h2  className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white pb-2">Feel Free Reach Out!!</p>
        <div  ><Contactform/></div>
      </div>
    </div>
  );
};
