"use client";

import { ReactNode } from "react";

export const DarkButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "big";
}) => {
  return (
    <div
      className={`${size === "small" ? "text-sm" : "text-xl"} ${
        size === "small" ? "px-8 py-2 pt-2" : "px-10 py-4"
      } flex flex-col justify-center cursor-pointer bg-purple-800 hover:shadow-lg cursor-pointer font-bold text-center text-white rounded`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
