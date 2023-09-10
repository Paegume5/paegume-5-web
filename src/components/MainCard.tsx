interface MainCardProps {
  title: string;
  titleInside?: boolean;
  children: React.ReactNode;
}

interface TitleProps {
  text: string;
  color?: string;
}

const Title = ({ text, color = "text-black" }: TitleProps) => {
  return (
    <div
      className={`mb-2 text-6xl font-black text-center ${color} lg:text-4xl`}
    >
      {text}
    </div>
  );
};

const MainCard = ({ title, titleInside, children }: MainCardProps) => {
  return (
    <div className="py-4">
      {titleInside || <Title text={title} />}
      <div className="w-[85vw] mx-auto p-8 bg-white shadow-card shadow-gray-500 sm:text-sm sm:w-[90vw]">
        {titleInside && <Title text={title} />}
        {children}
      </div>
    </div>
  );
};

export default MainCard;
