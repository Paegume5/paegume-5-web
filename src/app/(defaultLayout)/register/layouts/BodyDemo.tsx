import SecondaryButton from "@components/SecondaryButton";
import { navHeight, topMargin } from "@constants/constants";
import Image from "next/image";

const Body = () => {
  let marginT = topMargin(navHeight);
  let contStyle = { marginTop: 0 };

  const inputStyles =
    "p-3 rounded text-sm outline-none border-2 focus:border-color-2 transition-all focus:invalid:border-color-6";

  return (
    <div className="flex w-full h-full overflow-hidden" style={contStyle}>
      <a href="/" className="fixed text-blue-500 text-sm underline top-6 left-6 z-20">Back to homepage</a>
      <div className="lg:fixed">
        <div className="relative w-[50vw] lg:w-[100vw] lg:absolute h-[100vh] shadow-2xl z-10">
          <Image
            src="/img/header_bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="z-10 lg:absolute lg:top-[50%] lg:left-[50%] lg:tranform lg:-translate-x-[50%] lg:-translate-y-[50%]">
          <form
            action=""
            className="flex flex-col gap-4 px-8 py-12 bg-gray-500 rounded-lg backdrop-blur-xl lg:bg-white/70 lg:shadow-2xl"
          >
            <h1 className="text-3xl font-bold self-center">PAGD Registration</h1>
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
    </div>
  );
};

export default Body;
