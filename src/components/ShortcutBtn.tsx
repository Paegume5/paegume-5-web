interface BtnProps {
  header: string;
  linkText: string;
  to: string;
  bgColor: string;
  children: React.ReactNode;
  noLink?: boolean;
}

const ShortcutBtn = ({
  header,
  bgColor,
  linkText,
  to,
  children,
  noLink,
}: BtnProps) => {
  const linkBtn = (
    <a
      className={`px-6 py-2 border-2 border-gray-200 rounded-sm text-md lg:text-sm lg:px-4 hover:bg-color-5/40`}
      href={to}
    >
      {linkText}
    </a>
  );

  return (
    <div
      className={`flex flex-col gap-2 items-start px-6 py-16 w-full font-light text-white ${bgColor} select-none lg:py-8 sm:px-12`}
    >
      <h1 className="text-3xl font-medium lg:text-2xl">{header}</h1>
      <p className="text-md lg:text-sm">{children}</p>
      {noLink || linkBtn}
    </div>
  );
};

export default ShortcutBtn;
