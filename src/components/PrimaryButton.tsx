import { FiArrowRight } from "react-icons/fi";

interface PrimaryButtonProps {
  text: string;
  bgColor?: string;
  arrow?: boolean;
  click?: () => void;
  link?: boolean;
  to?: string;
  classes?: string;
}

const PrimaryButton = ({
  text,
  bgColor = "bg-color-2",
  arrow,
  click,
  link,
  to = "",
  classes,
}: PrimaryButtonProps) => {
  const btn = (
    <button
      className={`flex gap-1 items-center justify-center px-5 py-3 rounded-full outline-none ${bgColor} text-secondary-fg hover:opacity-75 ${classes}`}
      onClick={click}
    >
      {text}
      {arrow && (
        <span>
          <FiArrowRight />
        </span>
      )}
    </button>
  );

  const linkBtn = (
    <a
      className={`flex gap-1 items-center justify-center px-5 py-3 w-fit rounded-full outline-none ${bgColor} text-secondary-fg hover:opacity-75 ${classes}`}
      href={to}
    >
      {text}
      {arrow && (
        <span>
          <FiArrowRight />
        </span>
      )}
    </a>
  );

  return link ? linkBtn : btn;
};

export default PrimaryButton;
