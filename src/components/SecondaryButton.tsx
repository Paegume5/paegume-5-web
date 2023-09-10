import { FiArrowRight } from "react-icons/fi";

interface SecondaryButtonProps {
  text: string;
  bgColor?: string;
  arrow?: boolean;
  click?: () => void;
  submit?: boolean;
  link?: boolean;
  to?: string;
  classes?: string;
  disabled?: boolean;
}

const SecondaryButton = ({
  text,
  bgColor = "bg-color-2",
  arrow,
  click,
  submit,
  link,
  to,
  classes = "px-5",
  disabled,
}: SecondaryButtonProps) => {
  const btn = (
    <button
      className={`flex gap-1 items-center justify-center py-3 text-sm rounded-[4px] ${bgColor} text-secondary-fg hover:opacity-75 disabled:opacity-75 ${classes}`}
      onClick={click}
      type={submit ? "submit" : "button"}
      disabled={disabled}
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
      className={`flex gap-1 items-center justify-center py-3 text-sm w-fit rounded-[4px] ${bgColor} text-secondary-fg hover:opacity-75 ${classes}`}
      href={to ?? ""}
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

export default SecondaryButton;
