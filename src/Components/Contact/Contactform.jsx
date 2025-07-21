import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const Contactform = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5hpf44l", "template_2c8ppxd", form.current, {
        publicKey: "cHLjhncoh8WyMMT-h",
      })
      .then(
        () => {
            setEmail("");
            setName("");
            setMessage("");
            setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
         <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4"
        action=""
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          className="h-12 rounded-lg bg-lightBrown px-2"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          className="h-12 rounded-lg bg-lightBrown px-2"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          className=" rounded-lg bg-lightBrown p-2"
          id=""
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
