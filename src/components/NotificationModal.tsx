"use client";

import Modal from "./Modal";

interface NotificationModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  type?: "default" | "success" | "error";
  title?: string;
  redirect?: boolean;
  redirectTo?: string;
}

const color = {
  bg: {
    default: "bg-white",
    success: "bg-green-800",
    error: "bg-red-800",
  },
  text: {
    default: "text-black",
    success: "text-white",
    error: "text-white",
  },
};

const NotificationModal = ({
  open,
  setOpen,
  children,
  type = "default",
  title = "Message",
  redirect = false,
  redirectTo,
}: NotificationModalProps) => {
  const modal = (
    <Modal
      open={open}
      setOpen={setOpen}
      className="pb-64"
      dark={type !== "default"}
    >
      <div
        className={`flex flex-col gap-2 p-4 ${color.bg[type]} ${color.text[type]} text-black max-w-sm rounded-md shadow-lg`}
      >
        <div>
          <div className="text-3xl font-medium">{title}</div>
          <div className="w-full border-b"></div>
        </div>
        <div className="font-light">{children}</div>
      </div>
    </Modal>
  );

  return open && modal;
};

export default NotificationModal;
