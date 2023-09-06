'use client';

import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <div className="flex lg:flex-col items-center justify-evenly gap-4 lg:gap-8 p-8 mt-8 w-full bg-[#151414] text-gray-500">
      <div className="flex flex-col items-center justify-center w-full gap-2 lg:max-w-lg">
        <div className="flex items-center justify-center gap-4">
          <Image src="/img/logo.png" alt="" width={80} height={80} />
          <p className="text-footer">
            Paegume 5 Charity Organization (PAGD) represents a relatively young
            and local NGO that promotes humanitarian service delivery, saving
            lives and mitigating human suffering based on comprehensive
            engagement in relief, recovery, rehabilitation and resilience.
          </p>
        </div>
        <div className="flex gap-2">
          <SocialIcon
            link="https://facebook.com/"
            logoSrc="/svg/icons/facebook.svg"
            bgColor="bg-facebook"
          />
          <SocialIcon
            link="https://youtube.com/"
            logoSrc="/svg/icons/youtube.svg"
            bgColor="bg-white"
          />
          <SocialIcon
            link="https://t.me/"
            logoSrc="/svg/icons/telegram.svg"
            bgColor="bg-telegram"
          />
        </div>
      </div>
      <form className="flex flex-col items-center justify-center w-full h-full lg:max-w-lg">
        <h1 className="mb-2 text-2xl font-medium text-white">
          Send us a message
        </h1>
        <div className="flex flex-col gap-2 px-16 sm:px-12 w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name (Optional)"
            className="p-2 text-sm transition-all border-2 border-transparent rounded-md outline-none text-primary-fg focus:border-color-2"
          />
          <textarea
            name=""
            id=""
            rows={3}
            placeholder="Write your message ..."
            className="w-full p-2 text-sm transition-all border-2 border-transparent rounded-md outline-none resize-none text-primary-fg focus:border-color-2"
          ></textarea>
          <SecondaryButton text="Send" />
        </div>
      </form>
      <div className="flex items-center justify-center w-full gap-4 lg:max-w-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium text-white lg:self-center">Contact Us</h1>
          <div className="flex items-center gap-4">
            <Image src="/svg/icons/phone.svg" width={32} height={32} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-300">Call Us</span>
              <span className="text-sm text-gray-500">+251938551105</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/svg/icons/mail.svg" width={32} height={32} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-300">Mail Us</span>
              <span className="text-sm text-gray-500">
                peagumeamst88@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/svg/icons/location.svg"
              width={32}
              height={32}
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-300">Visit Us</span>
              <span className="text-sm text-gray-500">
                Bole sub-city, Wordea 14
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
