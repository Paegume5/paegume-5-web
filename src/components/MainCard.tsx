import { ReactNode } from "react";

interface MainCardProps {
  title: string;
  titleInside?: boolean;
  children: ReactNode;
}

interface TitleProps {
  text: string;
  color?: string;
}

const Title = ({ text, color }: TitleProps) => {
  return (
    <div className={`mb-2 text-6xl font-black text-center text-${color ?? 'blackp-fg'} lg:text-4xl`}>
      {text}
    </div>
  );
};

const MainCard = ({ title, titleInside, children }: MainCardProps) => {
  return (
    <div className="my-10">
      {titleInside || <Title text={title} />}
      <div className="w-[85vw] mx-auto p-8 bg-white shadow-card shadow-gray-500 sm:text-sm sm:w-[90vw]">
        {titleInside && <Title text={title} />}
        {children}
      </div>
    </div>
  );
};

export default MainCard;
