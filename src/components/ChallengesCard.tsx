import Image from "next/image";

interface ChallengesCardProps {
  header: string;
  imgSrc: string;
  bgColor?: string;
  children: React.ReactNode;
}

const ChallengesCard = ({
  header,
  imgSrc,
  bgColor = "bg-color-4",
  children,
}: ChallengesCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-6 gap-4 rounded-lg ${bgColor}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 md:w-12 md:h-12">
          <Image
            src={imgSrc}
            alt="icon"
            fill
            draggable={false}
            className="select-none"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center px-2 md:text-xl sm:text-lg">
          {header}
        </h1>
      </div>
      <p className="px-6 text-md font-light text-center md:text-xs xs:px-12">
        {children}
      </p>
    </div>
  );
};

export default ChallengesCard;
