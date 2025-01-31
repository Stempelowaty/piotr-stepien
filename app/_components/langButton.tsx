"use client";
import { redirect, usePathname } from "next/navigation";

interface LangButtonProps {
  lang: string;
}
export default function LangButton(props: LangButtonProps) {
  const { lang } = props;
  const pathname = usePathname();

  return (
    <button
      className="p-1 rounded-xl flex items-center hover:scale-105 duration-500 transition bg-gradient-to-br from-cyan-500 via-cyan-200 to-slate-300 text-slate-950 font-lexend font-bold w-8 h-8 justify-center"
      onClick={() => {
        if (lang === "pl-PL") redirect(`/en-US/${pathname.substring(6)}`);
        else redirect(`/pl-PL/${pathname.substring(6)}`);
      }}
    >
      {props.lang === "pl-PL" ? "PL" : "EN"}
    </button>
  );
}
