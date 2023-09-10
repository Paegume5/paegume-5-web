"use client";

import { toggleBodyScroll } from "@utils/utils";
import { useEffect } from "react";
import "@styles/notificationModal.css";

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
  useEffect(() => {
    toggleBodyScroll("hide");
    return () => toggleBodyScroll("show");
  });

  const bgColor = color.bg[type ?? "default"];
  const textColor = color.text[type ?? "default"];

  const modal = (
    <div
      className="fixed top-0 z-50 flex items-center justify-center w-screen h-screen bg-black/75"
      onClick={() => setOpen(false)}
    >
      <div
        className={`flex flex-col gap-2 p-4 mb-64 ${bgColor} ${textColor} text-black max-w-sm rounded-md shadow-lg`}
        style={{ animation: "slideDown 0.2s" }}
      >
        <div>
          <div className="text-3xl font-medium">{title}</div>
          <div className="w-full border-b"></div>
        </div>
        <div className="font-light">{children}</div>
      </div>
    </div>
  );

  return open && modal;
};

export default NotificationModal;
