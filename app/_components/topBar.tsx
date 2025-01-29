import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import LangButton from "./langButton";
interface TopBarProps {
  lang: string;
}
export default function TopBar(props: TopBarProps) {
  const { lang } = props;
  return (
    <div className="w-full pt-16 px-16 flex justify-between z-30">
      <div className="flex gap-2">
        <Link
          href={"https://github.com/Stempelowaty"}
          className="hover:scale-110 transition duration-500"
        >
          <Github className="w-8 h-8 text-slate-950 p-1 bg-slate-300 rounded-xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/piotr-stepien-2169bb223/"}
          className="hover:scale-110 transition duration-500"
        >
          <Linkedin className="w-8 h-8 text-slate-950 p-1 bg-slate-300 rounded-xl" />
        </Link>
      </div>
      <LangButton lang={lang} />
    </div>
  );
}
