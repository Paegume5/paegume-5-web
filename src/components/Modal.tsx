import { toggleBodyScroll } from "@utils/utils";
import { useEffect } from "react";
import "@styles/modal.css";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = ({ open, setOpen, children }: ModalProps) => {
  useEffect(() => {
    open ? toggleBodyScroll("hide") : toggleBodyScroll("show");
  }, [open]);

  const modal = (
    <div className="fixed top-0 z-50 flex items-center justify-center w-screen h-screen">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer bg-black/75"
        onClick={() => setOpen(false)}
      ></div>
      <div
        className="relative w-fit h-fit z-50 overflow-hidden rounded-md"
        style={{
          animation: "modalOpen 0.3s",
        }}
      >
        <button
          className="absolute top-1 right-1 text-2xl font-bold"
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
