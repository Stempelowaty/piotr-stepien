"use client";
import { redirect, usePathname } from "next/navigation";
import { LanguagesIcon } from "lucide-react";

interface LangButtonProps {
  lang: string;
}
export default function LangButton(props: LangButtonProps) {
  const { lang } = props;
  const pathname = usePathname();

  return (
    <button
      className="absolute top-5 right-5 flex items-center hover:scale-110 duration-500 transition"
      onClick={() => {
        if (lang === "pl-PL") redirect(`/en-US/${pathname.substring(6)}`);
        else redirect(`/pl-PL/${pathname.substring(6)}`);
      }}
    >
      <LanguagesIcon className="w-5 h-5" />
      {props.lang === "pl-PL" ? "PL" : "EN"}
    </button>
  );
}
