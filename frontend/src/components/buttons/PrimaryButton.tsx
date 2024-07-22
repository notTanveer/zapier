"use client";

import { ReactNode } from "react";

export const PrimaryButton = ({
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
      } cursor-pointer bg-amber-700 hover:shadow-lg cursor-pointer font-bold text-center text-white rounded-full`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
