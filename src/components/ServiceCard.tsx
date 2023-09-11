import Image from "next/image";

interface ServiceCardProps {
  header: string;
  iconSrc: string;
  children: React.ReactNode;
}

const ServiceCard = ({ header, children, iconSrc }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="p-2 text-white rounded-full bg-color-2/40 w-fit">
        <Image
          src={iconSrc}
          alt="icon"
          height={24}
          width={24}
          draggable={false}
          className="select-none"
          onContextMenu={() => false}
        />
      </div>
      <h1 className="text-lg font-medium">{header}</h1>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
};

export default ServiceCard;
