import { toggleBodyScroll } from "@utils/utils";
import { useEffect } from "react";
import "@styles/animations.css";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  noAnimation?: boolean;
}

const Modal = ({
  open,
  setOpen,
  dark,
  className,
  noAnimation,
  children,
}: ModalProps) => {
  useEffect(() => {
    open ? toggleBodyScroll("hide") : toggleBodyScroll("show");
  }, [open]);

  const modal = (
    <div
      className={`fixed top-0 z-50 flex items-center justify-center w-screen h-screen ${className}`}
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 cursor-pointer bg-black/75"
        onClick={() => setOpen(false)}
      ></div>
      <div
        className="relative w-fit h-fit z-50 overflow-hidden rounded-md"
        style={{
          animation: noAnimation ? "" : "modalOpen 0.3s",
        }}
      >
        <button
          className={`absolute top-2 right-2 text-lg font-bold bg-gray-300/40 shadow-2xl rounded-full p-1 z-50 ${
            dark && "text-white"
          }`}
          onClick={() => setOpen(false)}
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );

  return open && modal;
};

export default Modal;
