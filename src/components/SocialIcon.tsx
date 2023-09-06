import Image from "next/image";

interface SocialIconProps {
  link: string;
  logoSrc: string;
  bgColor: string;
}

const SocialIcon = ({ link, logoSrc, bgColor }: SocialIconProps) => {
  return (
    <a
      href={link}
      target="_blank"
      onContextMenu={() => {}}
      className={`${bgColor || "bg-color-2" } p-2 rounded-full hover:transform hover:-translate-y-1 transition-all duration-300`}
    >
      <Image src={logoSrc} width={16} height={16} alt="" />
    </a>
  );
};

export default SocialIcon;
