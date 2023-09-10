import Image from "next/image";

interface HelpProps {
  header: string;
  iconSrc: string;
  children: React.ReactNode;
}

const Help = ({ header, children, iconSrc }: HelpProps) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex sm:flex-col items-center gap-2">
        <div className="p-2 text-white rounded-full bg-color-6 w-fit">
          <Image
            src={iconSrc}
            alt="icon"
            height={32}
            width={32}
            draggable={false}
            className="select-none"
          />
        </div>
        <h1 className="text-lg font-medium">{header}</h1>
      </div>
      <p className="text-sm text-gray-600 sm:text-xs">{children}</p>
    </div>
  );
};

export default Help;
