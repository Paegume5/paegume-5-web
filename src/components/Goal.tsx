"use client";

interface GoalProps {
  title: string;
  children: React.ReactNode;
  active?: boolean;
  click?: () => void;
}

const Goal = ({ title, children, active, click }: GoalProps) => {
  return (
    <div
      className="flex flex-col items-center justify-start h-full px-4 py-8 md:py-4 shadow-card shadow-gray-400 select-none md:cursor-pointer"
      onClick={click}
    >
      <div className="text-2xl font-semibold">{title}</div>
      <div
        className={`overflow-hidden transition-all ${
          active ? "md:max-h-64 duration-700" : "md:max-h-0 duration-300"
        }`}
      >
        <div className={`w-full h-2 rounded-full bg-color-2`}></div>
        <div className={`text-center mt-4`}>{children}</div>
      </div>
    </div>
  );
};

export default Goal;
