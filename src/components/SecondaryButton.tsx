interface SecondaryButtonProps {
  text: string;
  color?: string;
  arrow?: boolean;
  click?: () => void;
  submit?: () => void;
  link?: boolean;
  to? : string
  classes?: string;
}

const SecondaryButton = ({ text, color, arrow, click, submit, link, to, classes }: SecondaryButtonProps) => {
  const btn = (
    <button
      className={`flex gap-1 items-center justify-center py-3 text-sm rounded-[4px] ${
        color ?? "bg-color-2"
      } text-secondary-fg hover:opacity-75 ${classes ?? "px-5"}`}
      onClick={click}
      onSubmit={submit}
      
    >
      {text}
      {arrow && <span>&gt;</span>}
    </button>
  );

  const linkBtn = (
    <a
      className={`flex gap-1 items-center justify-center py-3 text-sm w-fit rounded-[4px] ${
        color ?? "bg-color-2"
      } text-secondary-fg hover:opacity-75 ${classes ?? "px-5"}`}
      href={to ?? ""}
    >
      {text}
      {arrow && <span>&gt;</span>}
    </a>
  );

  return (link ? linkBtn : btn);
};

export default SecondaryButton;
