"use client";

import { ReactNode } from "react";

export const LinkButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="px-3 py-1 cursor-pointer hover:bg-slate-100 font-light text-base rounded"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
