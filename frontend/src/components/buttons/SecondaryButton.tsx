"use client";

import { ReactNode } from "react";

export const SecondaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size: "small" | "big";
}) => {
  return (
    <div
      className={`${size === "small" ? "text-sm" : "text-xl"} ${
        size === "small" ? "px-8 pt-2" : "px-10 py-4"
      } cursor-pointer hover:border-s-2 hover:border-e-2 cursor-pointer font-bold text-black border border-black rounded-full`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
