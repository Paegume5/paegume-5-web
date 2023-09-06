import SecondaryButton from "@components/SecondaryButton";
import { navHeight, topMargin } from "@constants/constants";
import Image from "next/image";

const Body = () => {
  let marginT = topMargin(navHeight);
  let contStyle = {
    marginTop: 0,
    backgroundImage: `linear-gradient(to top, #00000021 20%, #00000066), url('/img/header_bg.jpg')`,
  };

  const inputStyles =
    "p-3 rounded text-sm outline-none border-2 focus:border-color-2 transition-all focus:invalid:border-color-6";

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-center bg-cover"
      style={contStyle}
    >
      <a
        href="/"
        className="fixed text-color-2 text-sm underline top-6 left-6 z-20"
      >
        Back to homepage
      </a>
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-3xl text-white">Become a Member Now</h1>
        <form
          action=""
          className="flex flex-col gap-4 px-8 py-12 mx-8 bg-white/70 rounded-lg shadow-2xl backdrop-blur-xl"
        >
          <h1 className="self-center text-3xl font-bold">PAGD Registration</h1>
          <div className="flex justify-between gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className={`${inputStyles} w-full`}
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className={`${inputStyles} w-full`}
              required
            />
          </div>
          <input
            type="number"
            name=""
            id=""
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
            placeholder="Phone Number"
            className={`${inputStyles}`}
            required
          />
          <input
            type="email"
            name=""
            id=""
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            placeholder="Email Address"
            className={`${inputStyles}`}
            required
          />
          <div className="self-center w-fit">
            <SecondaryButton text="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
