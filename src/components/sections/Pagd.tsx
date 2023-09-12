import MainCard from "@components/MainCard";
import PrimaryButton from "@components/PrimaryButton";
import Image from "next/image";

const Pagd = () => {
  return (
    <MainCard title="PAGD">
      <div className="grid items-center w-full grid-cols-2 gap-4 md:grid-cols-1 justify-items-center">
        <div className="relative w-[30vw] md:w-[50vw] aspect-square">
          <Image
            src="/img/logo.png"
            alt="Logo"
            fill
            sizes=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:items-center">
          <p>
            Paegume Amest Gebresenay Dirijite (PAGD) represents a relatively
            young, local, Non-Governmental Organization (NGO). Since being
            established on 2012, PAGD has facilitated the provision of
            supplementary food, water, medicament and clothes for the most
            vulnerable homeless and urban poor communities
          </p>
          <PrimaryButton
            text="Read More"
            arrow
            link
            to="/about-us"
            classes="text-sm w-fit sm:text-xs"
          />
        </div>
      </div>
    </MainCard>
  );
};

export default Pagd;
