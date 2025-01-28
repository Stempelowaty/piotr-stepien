"use client";

import { useState } from "react";
import { AvailableLocalesType } from "../utils";
import Link from "next/link";
import { Construction } from "lucide-react";

interface WarningProps {
  lang: string;
}
export default function Warning(props: WarningProps) {
  const dict = getDictionary(props.lang);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="font-lexend">
      {isVisible && (
        <div className="w-full mt-64 h-full items-center flex flex-col gap-5">
          <Construction className="w-32 h-32" />
          <p className="font-bold text-3xl">{dict.stop}</p>
          <p>{dict.wip}</p>
          <Link
            href={"https://piotr-stepien-newspaper.vercel.app"}
            className="border border-foreground p-2 rounded-xl hover:scale-105 transition duration-500"
          >
            {dict.visitOld}
          </Link>
          <button
            className="border border-foreground p-2 rounded-xl hover:scale-105 transition duration-500"
            onClick={() => setIsVisible(false)}
          >
            {dict.show}
          </button>
        </div>
      )}
    </div>
  );
}

const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];

const dictionaries = {
  "pl-PL": {
    stop: "STOP",
    wip: "Nowe portfolio w trakcie pracy.",
    visitOld: "Poprzednie dostępne jest tutaj",
    show: "Chcę zobaczyć tą pracę!",
  },
  "en-US": {
    stop: "STOP",
    wip: "New portfolio website is under construction.",
    visitOld: "The legacy portfolio is available here",
    show: "I want to see this one!",
  },
};
