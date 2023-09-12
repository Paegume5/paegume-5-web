interface SocialIconProps {
  link: string;
  children?: React.ReactNode;
  bgColor?: string;
}

const SocialIcon = ({
  link,
  children,
  bgColor = "bg-color-2",
}: SocialIconProps) => {
  return (
    <a
      href={link}
      target="_blank"
      onContextMenu={() => {}}
      className={`${bgColor} p-2 rounded-full hover:transform hover:-translate-y-[6px] transition-all duration-300`}
    >
      {children}
    </a>
  );
};

export default SocialIcon;
