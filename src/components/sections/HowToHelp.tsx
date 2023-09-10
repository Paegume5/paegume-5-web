import HelpCard from "@components/HelpCard";
import Image from "next/image";

const HowToHelp = () => {
  return (
    <div
      id="help-section"
      className="flex items-center justify-center px-8 md:px-2 mx-auto lg:flex-col"
    >
      <div className="flex flex-col gap-12 justify-center w-full h-full p-12 md:p-6">
        <h1 className="text-4xl font-bold sm:self-center">How You Can Help</h1>
        <div className="grid grid-cols-2 gap-4">
          <HelpCard header="Donate" iconSrc="/svg/icons/money.svg">
            We kindly request your support through donations. Whether it is
            monetary contribution or in-kind donation, every contribution is
            greatly appreciated.
          </HelpCard>
          <HelpCard
            header="Spread Awareness"
            iconSrc="/svg/icons/awareness.svg"
          >
            We kindly request your support in spreading awareness about our
            organization to help us reach a wider audience and garner support
            for our cause.
          </HelpCard>
          <HelpCard header="Volunteer" iconSrc="/svg/icons/volunteer.svg">
            We seek dedicated individuals to join our team as volunteers. Your
            time, skills, and commitment will play a crucial role in our efforts
            to provide humanitarian support to those in need.
          </HelpCard>
          <HelpCard header="Host an event" iconSrc="/svg/icons/event.svg">
            Host your event to help us in feeding the needy and support our
            worthy cause. Even the smallest contribution can make a difference.
          </HelpCard>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-5 grid-rows-5 w-full h-full px-8">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-2xl"
            style={{
              gridColumn: "1 / span 3",
              gridRow: "1 / span 3",
              aspectRatio: "5 / 4",
            }}
          >
            <Image src="/img/img1.jpg" alt="" fill />
          </div>
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-2xl"
            style={{
              gridColumn: "3 / span 4",
              gridRow: "3 / span 4",
              aspectRatio: "5 / 4",
            }}
          >
            <Image src="/img/img2.jpg" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
