"use client";

import { useRouter } from "next/navigation";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { Feature } from "./Feature";
import { HeroVideo } from "./HeroVideo";

export const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80 mt-20">
        <div className="text-5xl font-semibold text-center pt-8">
          Automate as fast as you can type
        </div>
        <div className="text-xl font-normal text-center pt-8">
          AI gives you automation superpowers, and Zapier puts them to work.
          Pairing AI and Zapier helps you turn ideas into workflows and bots
          that work for you.
        </div>
        <div className="flex mt-10 gap-4 ml-40">
          <PrimaryButton onClick={() => {
            router.push('/signup')
          }} size="big">
            Get started free
          </PrimaryButton>
          <SecondaryButton onClick={() => {}} size="big">
            Contact Sales
          </SecondaryButton>
        </div>
        <div className="flex mt-5 gap-4 whitespace-nowrap">
            <Feature title="Free Forever" subtitle=" for core features" />
            <Feature title="More apps" subtitle=" than any other platform" />
            <Feature title="Cutting Edge" subtitle=" AI features" />
        </div>
        <div className="flex mt-5 pb-20">
            <HeroVideo />
        </div>
      </div>
    </div>
  );
};
