import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full pt-16 pe-16 flex justify-end gap-2 z-30">
      <Link
        href={"https://github.com/Stempelowaty"}
        className="hover:scale-105 transition duration-500"
      >
        <Github className="w-8 h-8 text-slate-950 p-1 bg-slate-400 rounded-xl" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/piotr-stepien-2169bb223/"}
        className="hover:scale-105 transition duration-500"
      >
        <Linkedin className="w-8 h-8 text-slate-950 p-1 bg-slate-400 rounded-xl" />
      </Link>
    </div>
  );
}
