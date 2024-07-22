"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const Appbar = () => {
  const router = useRouter();
  return (
    <div className="flex border-b justify-between p-4">
      <div className="font-bold text-3xl justify-center">
        <span className="text-amber-700">_</span>zapier
      </div>
      <div className="flex">
        <LinkButton
          onClick={() => {
            router.push("/");
          }}
        >
          Contact Sales
        </LinkButton>
        <LinkButton
          onClick={() => {
            router.push("/login");
          }}
        >
          Log in
        </LinkButton>
        <PrimaryButton
          onClick={() => {
            router.push("/signup");
          }}
          size="small"
        >
          Sign up
        </PrimaryButton>
      </div>
    </div>
  );
};
