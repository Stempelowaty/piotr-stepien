import Image from "next/image";
import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "../enterAnimation";
import Link from "next/link";

interface AboutMeProps {
  lang: string;
}
export default async function Header(props: AboutMeProps) {
  const { lang } = await props;
  const dict = getDictionary(lang);
  return (
    <div className="flex lg:flex-row flex-col-reverse py-32 font-outfit  px-8 md:px-32 xl:px-64">
      <div className="flex flex-col lg:w-1/2 items-center lg:items-start w-full">
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
        >
          <p className="text-8xl mb-2 font-thin text-center lg:text-start">
            Piotr
          </p>
          <p className="text-8xl mb-2 font-thin text-center lg:text-start">
            Stępień
          </p>
        </EnterAnimation>
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.5 }}
        >
          <p className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-2xl pt-8 lg:text-start text-center">
            Fullstack Developer
          </p>
        </EnterAnimation>
        <EnterAnimation
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.75 }}
        >
          <p className="text-lg pt-2 lg:text-start text-center">
            {dict.withExp}
          </p>
        </EnterAnimation>
        <EnterAnimation isDefault className="py-2 flex gap-1">
          <div className=" hover:scale-105 duration-500 transition border border-transparent bg-gradient-to-r from-cyan-500 to-slate-300 rounded-lg">
            <a href="#contact-form">
              <div className="bg-slate-950 rounded-lg p-1">{dict.contact}</div>
            </a>
          </div>
          <div className=" hover:scale-105 duration-500 transition border border-transparent bg-gradient-to-r from-cyan-500 to-slate-300 rounded-lg">
            <Link href="https://linkedin.com/in/piotr-stepien-2169bb223/">
              <div className="bg-slate-950 rounded-lg p-1">{dict.linkedin}</div>
            </Link>
          </div>
          <div className=" hover:scale-105 duration-500 transition border border-transparent bg-gradient-to-r from-cyan-500 to-slate-300 rounded-lg">
            <Link href="https://github.com/stempelowaty">
              <div className="bg-slate-950 rounded-lg p-1">{dict.github}</div>
            </Link>
          </div>
          <div className=" hover:scale-105 duration-500 transition border border-transparent bg-gradient-to-r from-cyan-500 to-slate-300 rounded-lg">
            <Link href="/CV_STEPIEN_EN.pdf" download>
              <div className="bg-slate-950 rounded-lg p-1">{dict.resume}</div>
            </Link>
          </div>
        </EnterAnimation>
      </div>
      <EnterAnimation
        initial={{ opacity: 0, x: 100, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        className="flex justify-center items-center lg:w-1/2 w-full"
      >
        <div className="aspect-square w-full max-w-[600px] rounded-full p-1 bg-gradient-to-br from-cyan-500 via-cyan-200 to-slate-300">
          <Image
            className="rounded-full z-100 w-full "
            width={343}
            height={343}
            src={"/profile_pic.png"}
            alt=""
          />
        </div>
      </EnterAnimation>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      withExp: "Z ponad trzyletnim doświadczeniem.",
      contact: "Kontakt",
      linkedin: "LinkedIn",
      github: "Github",
      resume: "CV",
    },
    "en-US": {
      withExp: "With over three years of experience.",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "Github",
      resume: "Resume",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
