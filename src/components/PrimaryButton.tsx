interface PrimaryButtonProps {
  text: string;
  color?: string;
  arrow?: boolean;
  handleClick?: () => void;
  link?: boolean;
  to? : string
  classes?: string;
}

const PrimaryButton = ({ text, color, arrow, handleClick, link, to, classes }: PrimaryButtonProps) => {
  const btn = (
    <button
      className={`flex gap-1 items-center justify-center px-5 py-3 text-sm rounded-full ${
        color ?? "bg-color-2"
      } text-secondary-fg hover:opacity-75 ${classes}`}
      onClick={handleClick}
    >
      {text}
      {arrow && <span>&gt;</span>}
    </button>
  );

  const linkBtn = (
    <a
      className={`flex gap-1 items-center justify-center px-5 py-3 text-sm w-fit rounded-full ${
        color ?? "bg-color-2"
      } text-secondary-fg hover:opacity-75`}
      href={to ?? ""}
    >
      {text}
      {arrow && <span>&gt;</span>}
    </a>
  );

  return (link ? linkBtn : btn);
};

export default PrimaryButton;
